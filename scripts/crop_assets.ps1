Add-Type -AssemblyName System.Drawing

function Crop-Image($src, $dst, $x, $y, $w, $h) {
    $bmp = [System.Drawing.Bitmap]::FromFile($src)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $crop = $bmp.Clone($rect, $bmp.PixelFormat)
    $crop.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
    $crop.Dispose()
    $bmp.Dispose()
    Write-Host "Cropped to $dst"
}

$assets = "C:\Users\vanessa\.gemini\antigravity-ide\scratch\rupa-fashion\assets"

# 1. Official Logo variants
# Full logo is 1024x576. Let's create a trimmed version:
Crop-Image "$assets\rupa-logo-official.png" "$assets\logo-monogram.png" 380 130 264 200
Crop-Image "$assets\rupa-logo-official.png" "$assets\logo-full-badge.png" 300 120 424 330
Crop-Image "$assets\rupa-logo-official.png" "$assets\logo-wordmark.png" 300 320 424 130

# 2. Ref Solution Slide / HD Infographic assets (1024 x 576)
# Full HD infographic
Copy-Item "$assets\infographic-solution-hd.png" "$assets\product-showcase-strip.png" -Force

# Before Garment (dress on hanger - HD)
Crop-Image "$assets\infographic-solution-hd.jpg" "$assets\before-garment.png" 35 60 190 395

# Transformed Dress on model (After - HD)
Crop-Image "$assets\infographic-solution-hd.jpg" "$assets\model-redesign-dress.png" 245 10 280 540

# Sisa Bahan, Jadi Produk Baru (Scrunchies, Patches, Tote bag - HD)
Crop-Image "$assets\infographic-solution-hd.jpg" "$assets\sisa-bahan-products.png" 530 35 460 440

# Dedicated accessory crops
Crop-Image "$assets\infographic-solution-hd.jpg" "$assets\totebag-upcycled.png" 740 140 200 220
Crop-Image "$assets\infographic-solution-hd.jpg" "$assets\scrunchie-upcycled.png" 565 170 195 195
Crop-Image "$assets\infographic-solution-hd.jpg" "$assets\patch-upcycled.png" 560 335 205 140

# 3. Ref BMC Slide assets (1024 x 580)
# Bottom-left: Indonesian model wearing 2-tone upcycled denim jacket
Crop-Image "$assets\ref-bmc-slide.png" "$assets\model-denim-jacket.png" 0 360 125 215

# Workshop artisan in laptop preview
Crop-Image "$assets\ref-bmc-slide.png" "$assets\artisan-workshop.png" 820 425 145 100

Write-Host "All assets cropped successfully!"
