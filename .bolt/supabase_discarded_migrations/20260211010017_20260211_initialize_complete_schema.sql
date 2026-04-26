/*
  # Initialize Complete VitrineTurbo Schema with Performance Optimization

  ## Overview
  Creates the essential tables and indexes for the VitrineTurbo storefront system.
  This includes all core tables with optimized indexes for performance.

  ## Tables
  1. users - Corretor/storefront information
  2. products - Product listings with pricing
  3. product_images - Product media
  4. product_categories - Category definitions
  5. user_product_categories - User-specific categories
  6. product_price_tiers - Tiered pricing
  7. clone_jobs - Background job tracking
  8. user_storefront_settings - Storefront configuration
  9. user_custom_sizes - Custom size definitions
  10. user_image_settings - Image limit settings
  11. user_promotional_phrases - Promotional phrases

  ## Performance Indexes
  Strategic indexes for efficient querying on CorretorPage and search operations.
*/

-- Create users table (corretores/storefronts)
CREATE TABLE IF NOT EXISTS public.users (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  bio text,
  avatar_url text,
  cover_url_desktop text,
  cover_url_mobile text,
  language text DEFAULT 'pt-BR',
  currency text DEFAULT 'BRL',
  theme text DEFAULT 'light',
  phone text,
  whatsapp_number text,
  country_code text DEFAULT 'BR',
  role text DEFAULT 'corretor' CHECK (role IN ('admin', 'corretor', 'moderator')),
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  max_images_per_product INTEGER NOT NULL DEFAULT 10,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT users_email_valid CHECK (email ~ '^[^\s@]+@[^\s@]+\.[^\s@]+$')
);

-- Create products table
CREATE TABLE IF NOT EXISTS public.products (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  slug text NOT NULL,
  description text,
  short_description text,
  price numeric(10,2),
  discounted_price numeric(10,2),
  is_starting_price boolean DEFAULT false,
  featured_image_url text,
  colors text[],
  sizes text[],
  category text[],
  brand text,
  gender text,
  condition text,
  has_tiered_pricing boolean DEFAULT false,
  min_tiered_price numeric(10,2),
  max_tiered_price numeric(10,2),
  is_visible_on_storefront boolean DEFAULT true,
  display_order integer DEFAULT 0,
  external_checkout_url text,
  status text DEFAULT 'disponivel' CHECK (status IN ('disponivel', 'vendido', 'reservado', 'draft')),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT product_slug_unique_per_user UNIQUE(user_id, slug),
  CONSTRAINT valid_price CHECK (price IS NULL OR price >= 0),
  CONSTRAINT valid_discounted_price CHECK (discounted_price IS NULL OR discounted_price >= 0),
  CONSTRAINT valid_display_order CHECK (display_order >= 0)
);

-- Create product_images table
CREATE TABLE IF NOT EXISTS public.product_images (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  url text NOT NULL,
  is_featured boolean DEFAULT false,
  media_type text DEFAULT 'image' CHECK (media_type IN ('image', 'video', 'document')),
  display_order integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT valid_display_order CHECK (display_order >= 0)
);

-- Create product_categories table
CREATE TABLE IF NOT EXISTS public.product_categories (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  icon text,
  created_at timestamp with time zone DEFAULT now()
);

-- Create user_product_categories table
CREATE TABLE IF NOT EXISTS public.user_product_categories (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT unique_category_per_user UNIQUE(user_id, name)
);

-- Create product_price_tiers table
CREATE TABLE IF NOT EXISTS public.product_price_tiers (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  min_quantity integer NOT NULL CHECK (min_quantity >= 1),
  unit_price numeric(10,2) NOT NULL CHECK (unit_price >= 0),
  discounted_unit_price numeric(10,2),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT unique_tier_per_product UNIQUE(product_id, min_quantity),
  CONSTRAINT valid_discounted_price CHECK (discounted_unit_price IS NULL OR discounted_unit_price >= 0),
  CONSTRAINT discounted_less_than_price CHECK (discounted_unit_price IS NULL OR discounted_unit_price <= unit_price)
);

-- Create clone_jobs table
CREATE TABLE IF NOT EXISTS public.clone_jobs (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  source_user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  target_user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'failed')),
  progress_percentage integer DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  total_products integer DEFAULT 0,
  cloned_products integer DEFAULT 0,
  error_message text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  completed_at timestamp with time zone
);

-- Create user_storefront_settings table
CREATE TABLE IF NOT EXISTS public.user_storefront_settings (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
  settings jsonb DEFAULT '{}',
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create promotional_phrases table
CREATE TABLE IF NOT EXISTS public.user_promotional_phrases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  phrase text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Create user_custom_sizes table
CREATE TABLE IF NOT EXISTS public.user_custom_sizes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  size_name text NOT NULL CHECK (size_name ~ '^[^\s][^\r\n]*[^\s]$' OR length(TRIM(BOTH FROM size_name)) = 1),
  size_type text DEFAULT 'custom' CHECK (size_type = ANY (ARRAY['apparel', 'shoe', 'custom'])),
  created_at timestamp with time zone DEFAULT now()
);

-- Create user_image_settings table
CREATE TABLE IF NOT EXISTS public.user_image_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
  max_images_per_product integer DEFAULT 10 CHECK (max_images_per_product >= 1 AND max_images_per_product <= 50),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create performance indexes
CREATE INDEX IF NOT EXISTS idx_users_slug ON public.users(slug);
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);
CREATE INDEX IF NOT EXISTS idx_users_max_images_per_product ON public.users(max_images_per_product);

-- Primary product indexes
CREATE INDEX IF NOT EXISTS idx_products_user_id ON public.products(user_id);
CREATE INDEX IF NOT EXISTS idx_products_slug ON public.products(slug);
CREATE INDEX IF NOT EXISTS idx_products_status ON public.products(status);

-- Performance indexes for CorretorPage - CRITICAL
-- Composite index for main storefront listing query
CREATE INDEX IF NOT EXISTS idx_products_user_visible_order 
ON public.products(user_id, is_visible_on_storefront, display_order)
WHERE is_visible_on_storefront = true;

-- Index for status filtering
CREATE INDEX IF NOT EXISTS idx_products_user_status
ON public.products(user_id, status)
WHERE is_visible_on_storefront = true;

-- Index for display order optimization
CREATE INDEX IF NOT EXISTS idx_products_display_order
ON public.products(display_order)
WHERE is_visible_on_storefront = true;

-- Product image indexes
CREATE INDEX IF NOT EXISTS idx_product_images_product_id ON public.product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_product_images_featured ON public.product_images(product_id, is_featured);

-- Category indexes
CREATE INDEX IF NOT EXISTS idx_user_categories_user_id ON public.user_product_categories(user_id);

-- Price tier indexes
CREATE INDEX IF NOT EXISTS idx_price_tiers_product_id ON public.product_price_tiers(product_id);

-- Clone job indexes
CREATE INDEX IF NOT EXISTS idx_clone_jobs_source_user ON public.clone_jobs(source_user_id);
CREATE INDEX IF NOT EXISTS idx_clone_jobs_target_user ON public.clone_jobs(target_user_id);
CREATE INDEX IF NOT EXISTS idx_clone_jobs_status ON public.clone_jobs(status);

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_price_tiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clone_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_storefront_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_promotional_phrases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_custom_sizes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_image_settings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users are publicly readable for previews" ON public.users
  FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" ON public.users
  FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can delete their own account" ON public.users
  FOR DELETE TO authenticated USING (auth.uid() = id);

-- RLS Policies for products table
CREATE POLICY "Products are publicly readable" ON public.products
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own products" ON public.products
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own products" ON public.products
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own products" ON public.products
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for product_images table
CREATE POLICY "Product images are publicly readable" ON public.product_images
  FOR SELECT USING (true);

CREATE POLICY "Users can manage their product images" ON public.product_images
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.products
      WHERE products.id = product_images.product_id
      AND products.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their product images" ON public.product_images
  FOR UPDATE TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM public.products
      WHERE products.id = product_images.product_id
      AND products.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.products
      WHERE products.id = product_images.product_id
      AND products.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete their product images" ON public.product_images
  FOR DELETE TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM public.products
      WHERE products.id = product_images.product_id
      AND products.user_id = auth.uid()
    )
  );

-- RLS Policies for product_categories table
CREATE POLICY "Categories are publicly readable" ON public.product_categories
  FOR SELECT USING (true);

-- RLS Policies for user_product_categories table
CREATE POLICY "User categories are publicly readable" ON public.user_product_categories
  FOR SELECT USING (true);

CREATE POLICY "Users can manage their categories" ON public.user_product_categories
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their categories" ON public.user_product_categories
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their categories" ON public.user_product_categories
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for product_price_tiers table
CREATE POLICY "Price tiers are publicly readable" ON public.product_price_tiers
  FOR SELECT USING (true);

CREATE POLICY "Users can manage their product price tiers" ON public.product_price_tiers
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.products
      WHERE products.id = product_price_tiers.product_id
      AND products.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their price tiers" ON public.product_price_tiers
  FOR UPDATE TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM public.products
      WHERE products.id = product_price_tiers.product_id
      AND products.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.products
      WHERE products.id = product_price_tiers.product_id
      AND products.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete their price tiers" ON public.product_price_tiers
  FOR DELETE TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM public.products
      WHERE products.id = product_price_tiers.product_id
      AND products.user_id = auth.uid()
    )
  );

-- RLS Policies for clone_jobs table
CREATE POLICY "Users can view their clone jobs" ON public.clone_jobs
  FOR SELECT TO authenticated 
  USING (source_user_id = auth.uid() OR target_user_id = auth.uid());

CREATE POLICY "System can insert clone jobs" ON public.clone_jobs
  FOR INSERT TO authenticated WITH CHECK (source_user_id = auth.uid());

CREATE POLICY "Users can update their clone jobs" ON public.clone_jobs
  FOR UPDATE TO authenticated 
  USING (source_user_id = auth.uid() OR target_user_id = auth.uid())
  WITH CHECK (source_user_id = auth.uid() OR target_user_id = auth.uid());

-- RLS Policies for user_storefront_settings table
CREATE POLICY "Users can view their settings" ON public.user_storefront_settings
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can update their settings" ON public.user_storefront_settings
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert their settings" ON public.user_storefront_settings
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- RLS Policies for promotional phrases table
CREATE POLICY "Users can view their phrases" ON public.user_promotional_phrases
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their phrases" ON public.user_promotional_phrases
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- RLS Policies for custom sizes table
CREATE POLICY "Users can view their custom sizes" ON public.user_custom_sizes
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their custom sizes" ON public.user_custom_sizes
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- RLS Policies for image settings table
CREATE POLICY "Users can view their image settings" ON public.user_image_settings
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their image settings" ON public.user_image_settings
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their image settings" ON public.user_image_settings
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
