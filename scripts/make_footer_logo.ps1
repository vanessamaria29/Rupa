Add-Type -AssemblyName System.Drawing

$src = "C:\Users\vanessa\.gemini\antigravity-ide\scratch\rupa-fashion\assets\rupa-transformation-infographic.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

# In 1024x576, RUPA with leaf is at x: 28, y: 38, w: 122, h: 32
$rect = New-Object System.Drawing.Rectangle(28, 38, 122, 32)
$crop = $bmp.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$outBmp = New-Object System.Drawing.Bitmap($crop.Width, $crop.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $crop.Width; $x++) {
    for ($y = 0; $y -lt $crop.Height; $y++) {
        $pixel = $crop.GetPixel($x, $y)
        # Background is cream: R > 200, G > 195, B > 180
        if ($pixel.R -gt 205 -and $pixel.G -gt 195 -and $pixel.B -gt 175) {
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        } else {
            # Text/logo pixel - render as warm cream (#F4EEDC)
            $brightness = ($pixel.R + $pixel.G + $pixel.B) / (3.0 * 255.0)
            $alpha = [int]((1.0 - $brightness) * 255.0 * 1.45)
            if ($alpha -gt 255) { $alpha = 255 }
            if ($alpha -lt 40) { $alpha = 0 }
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, 244, 238, 220))
        }
    }
}

$dst = "C:\Users\vanessa\.gemini\antigravity-ide\scratch\rupa-fashion\assets\logo-footer-light.png"
$outBmp.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)

$outBmp.Dispose()
$crop.Dispose()
$bmp.Dispose()
Write-Host "Created clean $dst successfully!"
