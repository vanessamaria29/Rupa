Add-Type -AssemblyName System.Drawing

$src = "C:\Users\vanessa\.gemini\antigravity-ide\scratch\rupa-fashion\assets\rupa-logo-official.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

Write-Host "Source Width: $($bmp.Width), Height: $($bmp.Height)"

# Let's find exact bounding box of the non-background pixels
$minX = $bmp.Width; $maxX = 0; $minY = $bmp.Height; $maxY = 0

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $p = $bmp.GetPixel($x, $y)
        # Check if non-background
        if ($p.R -lt 230 -or $p.G -lt 220 -or $p.B -lt 200) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Real Content Box: X: $minX to $maxX, Y: $minY to $maxY"
Write-Host "Content Width: $($maxX - $minX + 1), Height: $($maxY - $minY + 1)"

# Add 25px generous margin around the content so nothing ever gets cut off!
$pad = 25
$cropX = [Math]::Max(0, $minX - $pad)
$cropY = [Math]::Max(0, $minY - $pad)
$cropW = [Math]::Min($bmp.Width - $cropX, ($maxX - $minX + 1) + ($pad * 2))
$cropH = [Math]::Min($bmp.Height - $cropY, ($maxY - $minY + 1) + ($pad * 2))

Write-Host "Final Crop Box: X: $cropX, Y: $cropY, W: $cropW, H: $cropH"

# Create perfectly transparent logo
$out = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($ix = 0; $ix -lt $cropW; $ix++) {
    for ($iy = 0; $iy -lt $cropH; $iy++) {
        $p = $bmp.GetPixel($cropX + $ix, $cropY + $iy)
        
        # Background distance
        $bgR = 248; $bgG = 245; $bgB = 237
        $dist = [Math]::Sqrt([Math]::Pow($p.R - $bgR, 2) + [Math]::Pow($p.G - $bgG, 2) + [Math]::Pow($p.B - $bgB, 2))
        
        if ($dist -lt 16) {
            $out.SetPixel($ix, $iy, [System.Drawing.Color]::Transparent)
        } elseif ($dist -lt 36) {
            $alpha = [int](($dist - 16) / (36 - 16) * 255)
            $out.SetPixel($ix, $iy, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
        } else {
            $out.SetPixel($ix, $iy, [System.Drawing.Color]::FromArgb(255, $p.R, $p.G, $p.B))
        }
    }
}

# Also make the Monogram only (top R with needle, thread, star) with generous padding
$monoMinY = $minY
$monoMaxY = $minY + 235
$monoPad = 20
$mCropX = [Math]::Max(0, $minX - $monoPad)
$mCropY = [Math]::Max(0, $monoMinY - $monoPad)
$mCropW = [Math]::Min($bmp.Width - $mCropX, ($maxX - $minX + 1) + ($monoPad * 2))
$mCropH = [Math]::Min($bmp.Height - $mCropY, ($monoMaxY - $monoMinY + 1) + ($monoPad * 2))

$monoOut = New-Object System.Drawing.Bitmap($mCropW, $mCropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($ix = 0; $ix -lt $mCropW; $ix++) {
    for ($iy = 0; $iy -lt $mCropH; $iy++) {
        $p = $bmp.GetPixel($mCropX + $ix, $mCropY + $iy)
        $bgR = 248; $bgG = 245; $bgB = 237
        $dist = [Math]::Sqrt([Math]::Pow($p.R - $bgR, 2) + [Math]::Pow($p.G - $bgG, 2) + [Math]::Pow($p.B - $bgB, 2))
        
        if ($dist -lt 16) {
            $monoOut.SetPixel($ix, $iy, [System.Drawing.Color]::Transparent)
        } elseif ($dist -lt 36) {
            $alpha = [int](($dist - 16) / (36 - 16) * 255)
            $monoOut.SetPixel($ix, $iy, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
        } else {
            $monoOut.SetPixel($ix, $iy, [System.Drawing.Color]::FromArgb(255, $p.R, $p.G, $p.B))
        }
    }
}

# Save files:
# 1. Full transparent official logo
$out.Save("C:\Users\vanessa\.gemini\antigravity-ide\scratch\rupa-fashion\assets\rupa-logo-official-transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 2. Monogram transparent (R with needle & thread) - not cut off!
$monoOut.Save("C:\Users\vanessa\.gemini\antigravity-ide\scratch\rupa-fashion\assets\logo-monogram-transparent.png", [System.Drawing.Imaging.ImageFormat]::Png)

$out.Dispose()
$monoOut.Dispose()
$bmp.Dispose()
Write-Host "Done generating transparent logos with generous padding!"
