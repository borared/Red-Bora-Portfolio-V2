/**
 * Utility to optimize Cloudinary image and video URLs on-the-fly.
 * Automatically injects optimal delivery parameters (f_auto, q_auto)
 * and optional width constraint to eliminate massive raw image downloads.
 *
 * @param {string} url - Original image URL
 * @param {object} options - Optimization parameters
 * @param {number} [options.width] - Optional max width (e.g. 800, 1600)
 * @param {string} [options.quality='auto'] - Image quality preset ('auto', 'auto:eco', 'auto:good', 'auto:best')
 * @returns {string} - Optimized URL or original URL if not Cloudinary
 */
export function optimizeCloudinary(url, options = {}) {
  if (!url || typeof url !== 'string') return url;
  if (!url.includes('res.cloudinary.com')) return url;

  const { width, quality = 'auto' } = options;

  // Build transformation string
  const transforms = ['f_auto', `q_${quality}`];
  if (width) {
    transforms.push(`w_${width}`, 'c_limit');
  }
  const transformStr = transforms.join(',');

  // For Cloudinary uploads: /upload/... -> /upload/f_auto,q_auto,.../
  // Avoid duplicating if already transformed
  if (url.includes('/upload/')) {
    // Check if transform already exists after /upload/
    const uploadIndex = url.indexOf('/upload/');
    const rest = url.substring(uploadIndex + 8);
    // If it already has f_auto or similar right after upload, leave or replace
    if (/^(f_|q_|w_|c_)/.test(rest)) {
      return url;
    }
    return url.replace('/upload/', `/upload/${transformStr}/`);
  }

  return url;
}

/**
 * Thumbnail optimization preset for cards and grids
 */
export function optimizeThumb(url, width = 600) {
  return optimizeCloudinary(url, { width, quality: 'auto:good' });
}

/**
 * Background wallpaper optimization preset (large display width cap)
 */
export function optimizeBg(url, width = 1920) {
  return optimizeCloudinary(url, { width, quality: 'auto:good' });
}
