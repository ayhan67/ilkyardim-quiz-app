# İlkyardım Soru Bankası - React Native Uygulaması

Bu proje, Sağlık Bakanlığı verileri baz alınarak hazırlanmış bir ilkyardım soru bankası uygulamasıdır. Uygulama, ilkyardımcı eğitimi almış veya alacak kişilerin bilgilerini pekiştirmesi için geliştirilmiştir.

## Özellikler

- **Konu Anlatımları**: 15 farklı ilkyardım konusuyla ilgili bilgiler
- **Test Sistemi**: 10, 20 veya 40 soruluk sınavlar
- **Zamanlayıcı**: Sınav süresi takibi
- **Sonuç Analizi**: Doğru/yanlış cevap incelemesi
- **Animasyonlar**: Başarı/düşük not durumunda animasyonlu geri bildirim

## Teknik Özellikler

### Mimari
Uygulama bileşen tabanlı mimariye sahiptir:

```
components/
├── SplashScreen.js         # Giriş ekranı
├── NavigationScreen.js     # Ana navigasyon ekranı
├── TopicsScreen.js         # Konu listesi
├── TopicContentScreen.js   # Konu içeriği
└── ExamInfoScreen.js       # Sınav bilgi ve ayar ekranı

utils/
├── quizUtils.js           # Test işlemleri için yardımcı fonksiyonlar
└── commonStyles.js        # Ortak stil tanımları
```

### Geliştirme İyileştirmeleri

1. **Kod Organizasyonu**
   - Monolitik App.js dosyası bileşenlere bölündü
   - Ortak veriler ve fonksiyonlar merkezi dosyalarda toplandı
   - Stil tekrarları azaltıldı

2. **Performans Optimizasyonları**
   - Fisher-Yates karıştırma algoritması ile daha iyi rastgeleleştirme
   - State güncellemeleri için fonksiyonel güncellemeler kullanıldı
   - Gereksiz render işlemlerinin önüne geçildi

3. **Bakım Kolaylığı**
   - Konu verileri tek bir yerden yönetiliyor
   - Ortak stiller merkezi olarak tanımlandı
   - Fonksiyonlar yardımcı dosyalarda toplandı

## Kurulum

```bash
npm install
npx expo start
```

## Kullanım

1. Uygulama açıldığında karşılama ekranı gösterilir
2. "KONULAR" ile konu anlatımlarına erişebilirsiniz
3. "SINAVLAR" ile testlere başlayabilirsiniz
4. Test ayarlarında 10, 20 veya 40 soruluk sınav seçebilirsiniz
5. Sınav süresince cevaplarınızı işaretleyin
6. Sınav sonunda sonuçlarınızı ve yanlış cevaplarınızı inceleyin

## Katkıda Bulunma

1. Forklayın
2. Yeni bir branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request oluşturun

## Lisans

Bu proje telif hakkı ile korunmaktadır. Tüm hakları saklıdır. 2025