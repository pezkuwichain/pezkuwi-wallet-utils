# Pezkuwi Wallet Banners - Admin Guide

## Banner Yonetimi / Banner Management

Bu klasor Pezkuwi Wallet uygulamasindaki ana ekran banner/duyurularini kontrol eder.

### Dosya Yapisi / File Structure

```
banners/
├── v2/
│   ├── content/
│   │   ├── assets/                    # Ana ekran banner'lari
│   │   │   ├── banners.json           # Production banner listesi
│   │   │   ├── banners_dev.json       # Development/test banner listesi
│   │   │   ├── localized/             # Production dil dosyalari
│   │   │   │   ├── en.json            # Ingilizce
│   │   │   │   ├── ku.json            # Kurtce (Kurmanci)
│   │   │   │   └── tr.json            # Turkce
│   │   │   └── localized_dev/         # Development dil dosyalari
│   │   │
│   │   └── dapps/                     # DApps ekrani banner'lari
│   │       └── (ayni yapi)
│   │
│   └── resources/
│       ├── backgrounds/               # Arka plan gorselleri
│       └── images/                    # Banner gorselleri
```

### Banner Ekleme / Adding a Banner

1. **banners.json** dosyasina yeni banner ekleyin:
```json
{
    "id": "unique-banner-id",
    "background": "https://raw.githubusercontent.com/pezkuwichain/pezkuwi-wallet-utils/master/banners/v2/resources/backgrounds/YOUR_BG.png",
    "image": "https://raw.githubusercontent.com/pezkuwichain/pezkuwi-wallet-utils/master/banners/v2/resources/images/YOUR_IMAGE.png",
    "clipsToBounds": false,
    "action": null
}
```

2. **localized/*.json** dosyalarina icerik ekleyin:
```json
{
    "unique-banner-id": {
        "title": "Banner Basligi",
        "details": "Banner aciklamasi.\nIkinci satir."
    }
}
```

3. Gorselleri **resources/** klasorune yukleyin.

### Action Turleri / Action Types

- `null` - Tiklanamaz banner
- `"https://..."` - Dis link acar
- `"novawallet://nova/open/staking"` - Staking sayfasini acar
- `"novawallet://nova/open/governance"` - Governance sayfasini acar
- `"novawallet://nova/open/dapp?url=https://..."` - DApp acar

### Gorsel Boyutlari / Image Sizes

- **Background**: 750x200 px (PNG, gradient onerilir)
- **Image**: 250x180 px (PNG, seffaf arka plan)

### Test Etme / Testing

1. Degisiklikleri `banners_dev.json` ve `localized_dev/` klasorune yapin
2. Debug APK ile test edin
3. Onaylandiktan sonra production dosyalarina kopyalayin

### Onemli Notlar / Important Notes

- Banner ID'leri benzersiz olmali
- Tum dillerde ayni ID'ler olmali
- Gorseller GitHub'a yuklendikten sonra URL'ler guncellenmelidir
- Degisiklikler 15-30 dakika icinde uygulamada gorunur (cache)
