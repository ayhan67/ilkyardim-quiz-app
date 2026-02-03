// Utility functions for quiz operations

// Topic data centralized in one place
export const topicsData = [
  { id: 1, title: 'Genel İlkyardım Bilgileri' },
  { id: 2, title: 'Vücut Sistemleri' },
  { id: 3, title: 'Kanamalarda İlkyardım' },
  { id: 4, title: 'Şok ve Göğüs Ağrısında İlkyardım' },
  { id: 5, title: 'Yaralanmalarda İlkyardım' },
  { id: 6, title: 'Hava Yolu Tıkanıklığında İlkyardım' },
  { id: 7, title: 'Bilinç Bozukluklarında İlkyardım' },
  { id: 8, title: 'Kırık, Çıkık ve Burkulmalarda İlkyardım' },
  { id: 9, title: 'Boğulmalarda İlkyardım' },
  { id: 10, title: 'Böcek Sokmalarında İlkyardım' },
  { id: 11, title: 'Yanık, Soğuk ve Sıcak Acillerinde İlkyardım' },
  { id: 12, title: 'Göz, Kulak ve Buruna Yabancı Cisim Kaçmasında İlkyardım' },
  { id: 13, title: 'Zehirlenmelerde İlkyardım' },
  { id: 14, title: 'Acil Taşıma Teknikleri' },
  { id: 15, title: 'Temel Yaşam Desteği ve OED' }
];

// Topic content - detailed information for each topic
export const topicsContent = {
  1: {
    title: 'Genel İlkyardım Bilgileri',
    icon: '🚑',
    sections: [
      {
        heading: 'İlk Yardım Nedir?',
        content: 'Ani hastalık veya yaralanmalarda hayatı korumak, durumun kötüleşmesini önlemek ve iyileşmeye destek olmak için olay yerindeki imkanlarla yapılan hızlı ve etkili müdahalelerdir.'
      },
      {
        heading: 'İlk Yardımcının Özellikleri',
        content: '✓ Sakin, kendine güvenli ve pratik\n✓ Önce kendi can güvenliğini korumalı\n✓ 112\'yi arayabilmeli veya aratabilmeli\n✓ Çevredekileri organize edebilmeli\n✓ İyi iletişim becerisine sahip olmalı',
        isHighlight: true
      },
      {
        heading: 'Acil Durumla Başa Çıkma Adımları',
        content: '',
        subsections: [
          {
            subheading: '1️⃣ Olay Yeri Güvenliği',
            content: '• Tehlike var mı kontrol edin\n• Kendinizi, hastayı ve çevreyi koruyun\n• Gerekirse 112\'yi arayın'
          },
          {
            subheading: '2️⃣ Durum Değerlendirmesi',
            content: 'Bilincin Kontrolü: "İyi misiniz?" diye sorun\n\n• Yanıt veriyorsa: İzin alın, kanamaları kontrol edin\n• Yanıt vermiyorsa: Hemen 112\'yi arayın, solunumu kontrol edin'
          },
          {
            subheading: '3️⃣ Yardım Çağrısı (112)',
            content: 'Şu durumlarda mutlaka 112\'yi arayın:\n• Bilinç kaybı\n• Nefes almada zorluk\n• Şiddetli kanama\n• Göğüs ağrısı\n• Büyük yanık\n• Ciddi yaralanma',
            isImportant: true
          },
          {
            subheading: '4️⃣ İlk Yardım Uygulaması',
            content: '• Hastaya güven verin\n• Soğuk/sıcaktan koruyun\n• Ağır yaralıya yiyecek/içecek vermeyin'
          }
        ]
      },
      {
        heading: '⚠️ Önemli Hatırlatmalar',
        content: '• 18 yaş üstü bilinci yerinde kişi: Mutlaka izin alın\n• 18 yaş altı: Ebeveynden izin alın\n• Bilinci kapalı: İzin alınmış sayılır, müdahale edin\n• Hastayı zorunlu olmadıkça hareket ettirmeyin',
        isWarning: true
      },
      {
        heading: '💤 Derlenme Pozisyonu',
        content: 'Bilinçsiz ama normal nefes alan kişiler için:\n\n1. Yere yatırın\n2. Yan tarafa çevirin\n3. Üst bacağı bükün\n4. Başı arkaya eğerek hava yolunu açık tutun\n\nAmaç: Dilin hava yolunu kapatmasını önlemek',
        isHighlight: true
      },
      {
        heading: '📞 Acil Durum: 112',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  },
  2: {
    title: 'Vücut Sistemleri',
    icon: '🫀',
    sections: [
      {
        heading: '1. Dolaşım Sistemi',
        content: 'Görevi: Oksijen ve besinleri hücrelere taşır, atıkları uzaklaştırır\n\nYapılar:\n• Kalp: Göğüs kafesinin ortasında pompalar\n• Atar damar: Temiz kan taşır\n• Toplar damar: Kirli kan taşır\n• Kan: Vücut ağırlığının %8\'i kadar',
        image: 'circulatory_system',
        imageCaption: 'İnsan Dolaşım Sistemi - Kalp ve Damarlar'
      },
      {
        heading: '2. Solunum Sistemi',
        content: 'Görevi: Oksijen alır, karbondioksit atar\n\nYapılar:\n• Burun/Ağız → Yutak → Akciğerler\n• Akciğerler: Ana solunum organı',
        image: 'respiratory_system',
        imageCaption: 'İnsan Solunum Sistemi - Akciğerler'
      },
      {
        heading: '3. Sinir Sistemi',
        content: 'Görevi: Tüm sistemleri kontrol eder\n\nYapılar:\n• Beyin: Kafatası içinde\n• Omurilik: Omurga içinde',
        image: 'nervous_system',
        imageCaption: 'İnsan Sinir Sistemi - Beyin ve Omurilik',
        isHighlight: true
      },
      {
        heading: '⚠️ Kritik Bilgi',
        content: 'Sinir hücreleri yenilenemez! Beyin oksijensiz en fazla 4-6 dakika dayanabilir.',
        isWarning: true
      },
      {
        heading: '4. Kas-İskelet Sistemi',
        content: 'Görevi: Vücuda şekil verir, hareket ettirir, organları korur\n\nYapılar:\n• Kemikler: Organları koruyan güçlü yapılar\n• Kaslar: Hareket sağlar (kalp atışı, nefes alma, yürüme)\n• Eklemler: Kemiklerin birleştiği yerler',
        image: 'musculoskeletal_system',
        imageCaption: 'İnsan Kas-İskelet Sistemi'
      },
      {
        heading: '5. Sindirim Sistemi',
        content: 'Görevi: Besinleri sindirir\n\nYapılar:\nAğız → Yutak → Yemek Borusu → Mide → Bağırsaklar → Anüs\n\nYardımcılar: Karaciğer, pankreas, safra kesesi',
        image: 'digestive_system',
        imageCaption: 'İnsan Sindirim Sistemi'
      },
      {
        heading: '6. Boşaltım Sistemi',
        content: 'Görevi: Atık maddeleri vücuttan atar\n\nYapılar:\n• Böbrekler: Kanı süzer ve temizler\n• Ayrıca sıvı dengesini ve kan basıncını düzenler\n• İdrar kanalları ve idrar torbası',
        image: 'urinary_system',
        imageCaption: 'İnsan Boşaltım Sistemi - Böbrekler'
      },
      {
        heading: '7. Cilt',
        content: 'Görevi: Vücudu korur, ısı kaybını önler, ter ile denge sağlar\n\nYapılar:\n• Dış tabaka: Ölü hücreler, sürekli yenilenir\n• İç tabaka: Kan damarları, sinirler, ter ve yağ bezleri',
        image: 'skin_system',
        imageCaption: 'İnsan Derisi - Cilt Yapısı',
        isHighlight: true
      },
      {
        heading: '🏆 Bilgi',
        content: 'Cilt, en büyük ve en ağır organımızdır!',
        isImportant: true
      },
      {
        heading: '💡 Hatırla',
        content: 'Tüm sistemler birbiriyle bağlantılı çalışır!',
        isHighlight: true
      }
    ]
  },
  3: {
    title: 'Kanamalarda İlkyardım',
    icon: '🩸',
    sections: [
      {
        heading: 'Kanama Nedir?',
        content: 'Damar bütünlüğünün bozulması sonucu kanın damar dışına akmasıdır.',
        isHighlight: true
      },
      {
        heading: '⚠️ Kritik Uyarı',
        content: '1 litre veya daha fazla hızlı kan kaybı → Şok ve ölüm!',
        isWarning: true
      },
      {
        heading: 'Dış Kanamalar',
        content: '',
        subsections: [
          {
            subheading: '🔴 Atar Damar Kanaması',
            content: '• Fışkırır tarzda, kalp atışıyla uyumlu\n• Açık kırmızı renk\n• EN CİDDİ KANAMA TÜRÜ'
          },
          {
            subheading: '🔵 Toplar Damar Kanaması',
            content: '• Koyu kırmızı, yavaş ve düzenli akar\n• Atar damardan daha kolay kontrol edilir'
          },
          {
            subheading: '⚪ Kılcal Damar Kanaması',
            content: '• Sızıntı şeklinde\n• Genellikle ciddi değil, hızla kontrol edilir'
          }
        ]
      },
      {
        heading: 'İç Kanamalar',
        content: '• Kan vücut içinde kalır (kafatası, göğüs, karın)\n• Dışarıya kanama olmaz, fark edilmesi zor\n• Hayatı tehdit edebilir!\n\nBelirtileri:\n• Ağız/burun/kulak/makattan kan\n• Hızlı solunum ve kalp atışı\n• Soğuk, soluk, nemli cilt\n• Bilinç değişikliği',
        isWarning: true
      },
      {
        heading: 'Dış Kanamalarda İlk Yardım',
        content: '',
        subsections: [
          {
            subheading: 'Temel Adımlar',
            content: '1. Hasta/yaralıyı yatırın (düz zemin, sırt üstü)\n2. 112\'yi arayın\n3. Doğrudan bası uygulayın (en az 5 dakika)'
          },
          {
            subheading: 'Doğrudan Bası',
            content: '• Temiz bezle yara üzerine bası yapın\n• İlk bez ıslanırsa kaldırmayın, üzerine yeni bez ekleyin\n• 10 dakikada durmazsa daha geniş alana daha sıkı basın'
          },
          {
            subheading: 'Basınçlı Bandaj',
            content: '• Bası yapan bezi sabitlemek için\n• Sargı bezi ile sıkıca sarın\n• Dolaşımı kesecek kadar sıkı olmasın'
          }
        ]
      },
      {
        heading: '🔴 Turnike Uygulaması',
        content: 'Ne zaman uygulanır?\n• Doğrudan bası ve bandaj ile durdurulamayan ciddi kol/bacak kanamaları\n• Uzuv kopmaları\n• Çok sayıda yaralı varsa\n\nNasıl uygulanır?\n✓ 5-10 cm genişliğinde kumaş kullanın\n✓ Tek kemikli bölgelere (kol, uyluk) uygulayın\n✓ Kanama duruncaya kadar sıkın\n✓ Üzerini örtmeyin, görünür kalmalı\n✓ Saat ve "T" harfi yazın\n✓ Gevşetmeyin veya açmayın',
        isImportant: true
      },
      {
        heading: '⚠️ Turnike Dikkat',
        content: 'Ön kol ve baldıra turnike uygulanmaz (kopma durumu hariç)',
        isWarning: true
      },
      {
        heading: 'İç Kanamalarda İlk Yardım',
        content: '1. Hemen 112\'yi arayın\n2. Sırt üstü yatırın, sakinleştirin\n3. Mümkün olduğunca hareket ettirmeyin\n4. Sıkan giysileri gevşetin\n5. Ağızdan kan geliyorsa → Sağ yana çevirin\n6. Öksürürken kan → Oturur pozisyon\n7. Yiyecek/içecek vermeyin',
        isHighlight: true
      },
      {
        heading: '✂️ Uzuv Kopması',
        content: 'Hastaya müdahale:\n• Doğrudan bası veya turnike uygulayın\n\nKopan uzva müdahale:\n1. Su ile yıkamayın, ıslatmayın!\n2. Temiz beze sarın\n3. Plastik torbaya koyun\n4. Bu torbayı buz-su karışımı (1:2) ikinci torbaya koyun\n5. Yaralının adını yazın\n6. En geç 6 saat içinde hastaneye\n\n⚠️ Uzuv tam kopmamışsa kesmeyin!',
        isImportant: true
      },
      {
        heading: '👃 Burun Kanaması',
        content: '1. Oturur pozisyon\n2. Başı hafifçe öne eğin (kan yutulmasın)\n3. Burun kanatlarını 10-15 dakika sıkıştırın\n4. Konuşma, yutma, öksürme yapmasın\n5. 20 dakika sonra hala devam ediyorsa → 112',
        image: 'nosebleed_first_aid',
        imageCaption: 'Burun Kanamasında Doğru Pozisyon'
      },
      {
        heading: '👂 Kulak Kanaması',
        content: 'Kulaktan sıvı + kan = Ciddi kafa yaralanması!\n\nİlk yardım:\n1. Sakinleştirin\n2. Kulağı tıkamadan temiz bezle kapatın\n3. Bilinci açıksa → Sırt üstü yatırın\n4. Bilinci kapalıysa → Kanayan kulak üzerine yan yatırın\n5. Hemen 112\'yi arayın',
        isWarning: true
      },
      {
        heading: '🧤 Hijyen Kuralları',
        content: '✓ Çıplak elle kanla temas etmeyin\n✓ Eldiven kullanın\n✓ Eller önce ve sonra sabunla yıkanmalı\n✓ Mümkünse yaralının kendisi bası yapsın'
      },
      {
        heading: '🔹 Yabancı Cisim Batması',
        content: '⛔ Cismi ÇIKARMAYIN ve hareket ettirmeyin!\n\n1. Cismin etrafına gazlı bez yerleştirin\n2. Cismi sabit tutun\n3. Bandaj yapın (çok sıkı değil)\n4. 112\'yi arayın',
        isImportant: true
      },
      {
        heading: '📞 Acil Durum',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  },
  4: {
    title: 'Şok ve Göğüs Ağrısında İlkyardım',
    icon: '💔',
    sections: [
      {
        heading: 'Şok Nedir?',
        content: 'Dokuların ihtiyacı olan oksijen ve besinlerin dolaşım bozukluğu nedeniyle sağlanamaması durumudur.',
        isHighlight: true
      },
      {
        heading: '⚠️ Kritik Uyarı',
        content: 'Şok hayatı tehdit eder! Acil tedavi gerektirir.',
        isWarning: true
      },
      {
        heading: 'Şok Çeşitleri',
        content: '',
        subsections: [
          {
            subheading: '1. Kan/Sıvı Kaybına Bağlı Şok',
            content: '• Hemorajik: Kanama (yaralanmalar)\n• Hipovolemik: Kusma, ishal (sıvı kaybı)'
          },
          {
            subheading: '2. Kalp Rahatsızlıklarına Bağlı Şok',
            content: '• Kalp krizi veya kalp yaralanması'
          },
          {
            subheading: '3. Tıkayıcı Olaylara Bağlı Şok',
            content: '• Akciğer sönmesi\n• Kalp etrafında sıvı toplanması\n• Akciğere pıhtı atması'
          },
          {
            subheading: '4. Dağılım Bozukluğuna Bağlı Şok',
            content: '• Nörojenik: Sinir hasarı\n• Anafilaktik: Alerjik reaksiyon\n• Septik: Enfeksiyon'
          }
        ]
      },
      {
        heading: 'Şok Belirtileri',
        content: 'Hastada görülenler:\n• Endişe, huzursuzluk\n• Baş dönmesi, sersemlik\n• Bulantı-kusma\n• Göğüs ağrısı\n• Susuzluk hissi\n\nGözlemlenenler:\n• Hızlı ve zayıf nabız\n• Hızlı ve yüzeysel solunum\n• Soğuk, soluk, nemli cilt\n• Dudak ve tırnaklarda morarma\n• Bilinç azalması',
        isImportant: true
      },
      {
        heading: 'Şokta İlk Yardım',
        content: '1. Bilinci kontrol edin\n2. Hemen 112\'yi arayın\n3. Düz zemine sırt üstü yatırın\n4. Hava yolu ve solunumu kontrol edin\n5. Kanama varsa durdurun\n6. ŞOK POZİSYONU verin:\n   • Sırt üstü yatırın\n   • Bacakları 30-60° kaldırın\n   • Altına destek koyun\n7. Sıkan kıyafetleri gevşetin\n8. Üzerini örtün (aşırı ısınmasın)\n9. Yiyecek/içecek VERMEYİN\n10. Her 2-3 dakikada bir kontrol edin',
        image: 'shock_position',
        imageCaption: 'Şok Pozisyonu - Bacaklar 30-60° Yukarı',
        isHighlight: true
      },
      {
        heading: '⚠️ Özel Durumlar',
        content: 'Ağızdan kan geliyorsa/kusuyorsa:\n→ Yan tarafa çevirin\n\nBilinci kötüleşirse:\n→ Derlenme pozisyonuna getirin\n\nSolunumu durursa:\n→ Temel Yaşam Desteği başlatın',
        isWarning: true
      },
      {
        heading: '💔 Göğüs Ağrısı (Kalp Krizi) Belirtileri',
        content: '✓ Göğüste ezici, sıkıştırıcı ağrı\n✓ Ağrı omuz, sırt, boyun, çene, kollara yayılır\n✓ Göğüs ortasında ağırlık/baskı hissi\n✓ Baş dönmesi, bayılma\n✓ Terleme\n✓ Nefes almada zorluk\n✓ Bulantı-kusma',
        isImportant: true
      },
      {
        heading: '⚠️ Önemli',
        content: 'Her göğüs ağrısı kalp krizi değildir, ama kalp krizi olduğu varsayılmalıdır!',
        isWarning: true
      },
      {
        heading: 'Göğüs Ağrısında İlk Yardım',
        content: '1. Rahat pozisyonda oturtun (yarı eğimli)\n2. Dinlenmesini sağlayın, hareket ettirmeyin\n3. Sıkan kıyafetleri gevşetin\n4. Sakinleştirin, güven verin\n5. Daha önce böyle ağrısı olup olmadığını sorun\n6. Kalp ilacı kullanıyorsa almasına yardım edin\n7. Hemen 112\'yi arayın\n8. Yanında bekleyin',
        isHighlight: true
      },
      {
        heading: '🎯 Hatırlatmalar',
        content: '• Şok hayatı tehdit eder\n• Hızlı müdahale hayat kurtarır\n• 112\'yi mutlaka arayın\n• Yiyecek/içecek vermeyin\n• Hasta/yaralıyı yalnız bırakmayın'
      },
      {
        heading: '📞 Acil Durum',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  },
  5: {
    title: 'Yaralanmalarda İlkyardım',
    icon: '🤕',
    sections: [
      {
        heading: '1. Baş Yaralanmaları',
        content: 'Belirtileri:\n• Yara, şişlik, kanama\n• Baş ağrısı, baş dönmesi\n• Bilinç değişikliği\n• Bulantı, kusma\n• Burun/kulaktan kanama\n• Göz bebeklerinde eşitsizlik',
        isHighlight: true
      },
      {
        heading: 'Baş Yaralanmasında İlk Yardım',
        content: '✓ 112\'yi arayın\n✓ Bilinci açıksa: Baş ve omuzları hafif yükseltip sırt üstü yatırın\n✓ Kusarsa: Baş-boyun-omurga aynı hizada tutarak yan çevirin\n✓ Bilinci kapalıysa: Yan çevirin (baş-boyun-omurga hizalı)\n✓ Kanama varsa doğrudan bası (kafatasına aşırı kuvvet uygulamayın)\n✓ Kulaktan kan geliyorsa: Temiz bezi kulağa hafifçe sabitleyin, yaralıyı o tarafa yan yatırın'
      },
      {
        heading: '⚠️ Dikkat',
        content: 'Baş yaralanması = Boyun/omurga yaralanması da olabilir!',
        isWarning: true
      },
      {
        heading: '2. Boyun ve Omurga Yaralanmaları',
        content: 'Belirtileri:\n• Yaralanma bölgesinde ağrı\n• Aşağıda duyu kaybı/azalması\n• Kuvvet kaybı\n• El/ayaklarda uyuşma, his kaybı',
        isHighlight: true
      },
      {
        heading: 'Boyun/Omurga İlk Yardımı',
        content: '✓ 112\'yi arayın\n✓ Yaralıyı hareket ettirmeyin! (Sadece tehlike varsa)\n✓ Baş ve boynu sabit tutun\n✓ Bilinci açıksa: Bulunduğu pozisyonda sabit tutun\n✓ Bilinci kapalıysa: Baş-boyun-omurga hizalı tutarak derlenme pozisyonu'
      },
      {
        heading: '⛔ Yapılmaması Gerekenler',
        content: '• Yaralıyı hareket ettirmeyin\n• Boyunluk takmayın\n• Kulak/burundan akışı durdurmaya çalışmayın',
        isWarning: true
      },
      {
        heading: '3. Göğüs Yaralanmaları',
        content: 'Belirtileri:\n• Nefes darlığı, ağrı\n• Morarma, çıtırtı sesi\n• Açık yarada hava sesi\n• Şok bulguları'
      },
      {
        heading: 'Göğüs Yaralanmasında İlk Yardım',
        content: 'Kapalı (Künt) Yaralanma:\n✓ 112\'yi arayın\n✓ Yarı oturur pozisyon (yaralı tarafa doğru eğilsin)\n✓ Solunumu izleyin\n✓ Bilinci kapanırsa yaralı tarafa çevirin\n\nAçık Yaralanma:\n✓ Emici yara varsa: Temiz bezi üç kenarından bantlayın (bir kenar açık kalmalı)\n✓ Göğse saplanmış cisim: Kesinlikle çıkarmayın! Gazlı bez ile sabitleyin',
        isImportant: true
      },
      {
        heading: '4. Karın Yaralanmaları',
        content: 'A) Ezici (Künt) Yaralanma:\n• Karında ağrı, şişlik, morluk\n• İç kanama/şok bulguları\n\nİlk Yardım:\n✓ 112\'yi arayın\n✓ Düz zemine yatırın\n✓ İç kanama/şok takibi\n✓ Yiyecek/içecek vermeyin'
      },
      {
        heading: 'Karın Delici Yaralanması',
        content: '✓ 112\'yi arayın\n✓ Düz zemine yatırın\n✓ Yarayı temiz bezle örtün\n✓ Dışarı çıkan organlara dokunmayın! İçeri sokmayın! Nemli bezle örtün\n✓ Saplanmış cismi çıkarmayın! Gazlı bez ile sabitleyin\n✓ Dizleri bükün (mümkünse)\n✓ Yiyecek/içecek vermeyin',
        isWarning: true
      },
      {
        heading: '5. Ezilme Yaralanmaları',
        content: 'Nedenleri: Trafik kazası, şantiye kazası, patlama, deprem\n\nBelirtileri:\n• Vücutta ezilme yaraları\n• Kırıklar\n• Halsizlik, uykuya meyil\n• İdrar azalması/koyulaşması\n• Şok bulguları\n\nİlk Yardım:\n✓ 112\'yi arayın\n✓ Güvenliyse yaralıyı ezilme kaynağından uzaklaştırın\n✓ Kanama varsa durdurun\n✓ Yaralı uzuvları hareket ettirmeyin\n✓ Sıcak tutun',
        isImportant: true
      },
      {
        heading: '⚠️ Ezilme Uyarısı',
        content: 'Hafif yaralanmalarda bile organ yetmezliği gelişebilir - mutlaka hastaneye!',
        isWarning: true
      },
      {
        heading: '6. Diş Kopmaları',
        content: '⛔ Yerine yerleştirmeye çalışmayın\n⛔ Temizlemeyin (hayati dokulara zarar verir)\n⛔ Kökünden tutmayın\n\n✓ Streç filmde saklayın veya\n✓ Kişinin tükürüğü, tam yağlı süt, yumurta akı gibi protein içeren maddelerde saklayın\n✓ En kısa zamanda diş hekimine!'
      },
      {
        heading: '🎯 Genel Kurallar',
        content: 'Her yaralanmada:\n1. Bilinci kontrol edin\n2. 112\'yi arayın\n3. Yaşamsal bulguları kontrol edin\n4. Mümkün olduğunca hareket ettirmeyin\n5. Bilinci kapanırsa derlenme pozisyonu\n6. Solunumu durursa Temel Yaşam Desteği',
        isHighlight: true
      },
      {
        heading: '📞 Acil Durum',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  },
  6: {
    title: 'Hava Yolu Tıkanıklığında İlkyardım',
    icon: '😮‍💨',
    sections: [
      {
        heading: '⚠️ Genel Bilgi',
        content: 'Hava yolu tıkanıklığı, hızlı müdahale edilmezse solunum ve kalp durmasına neden olur!\n\n2 Tür Tıkanıklık:\n• Kısmi Tıkanma: Az da olsa hava geçişi var\n• Tam Tıkanma: Hiç hava geçişi yok',
        isWarning: true
      },
      {
        heading: 'Kısmi vs Tam Tıkanma',
        content: 'KISMİ TIKANMA:\n✓ Konuşabilir\n✓ Kuvvetli öksürebilir\n✓ Az da olsa nefes alır\n✓ Islık sesi duyulabilir\n\nTAM TIKANMA:\n✗ Konuşamaz\n✗ Öksüremez/zayıf öksürür\n✗ Nefes alamaz\n✗ Yüksek perdeli sesler\n✗ Cilt mavi/grimsi',
        isHighlight: true
      },
      {
        heading: 'Kısmi Tıkanıklıkta İlk Yardım',
        content: '1. "Boğuluyor musun?" diye sorun\n\n2. Öksürüyorsa, nefes alabiliyorsa:\n   • Öksürmeye devam etsin\n   • Başka bir şey yapmayın\n   • Yalnız bırakmayın (tam tıkanma gelişebilir)\n\n3. Yorulursa veya öksürük zayıflarsa:\n   • Sırt vurusu yapın (5 defa)\n   • Kürek kemikleri arasına sert vurun\n\n4. Ağızda görünen cisim varsa:\n   • Katı ve çıkarılabileceğinden eminseniz → Tek hamlede çıkarın\n   • Emin değilseniz → Dokunmayın!'
      },
      {
        heading: '🚨 Tam Tıkanıklıkta İlk Yardım (Bilinci Açık)',
        content: '1. Yardım isteyin, 112\'yi arayın\n\n2. KARIN BASISI (Heimlich Manevra):\n   • Arkasında durun\n   • Kişiyi öne eğin\n   • Bir elinizi yumruk yapın\n   • Yumruğu göbek ile iman tahtası arasına yerleştirin\n   • Diğer elle kavrayın\n   • İçeri ve yukarı doğru keskin çekin (5 defa)\n\n3. Hala tıkanıksa:\n   • 5 sırt vurusu + 5 karın basısı\n   • Dönüşümlü devam edin\n   • Cisim çıkana veya bilinç kaybolana kadar',
        image: 'heimlich_maneuver',
        imageCaption: 'Heimlich Manevrası - Karın Basısı Tekniği',
        isImportant: true
      },
      {
        heading: '🤰 Hamile veya Aşırı Şişman',
        content: 'Karın basısı yerine GÖĞÜS BASISI yapın:\n• Kolları koltuk altından geçirin\n• Yumruğu göğüs kemiğinin alt yarısına\n• Hızlı içe doğru itme (5 defa)',
        isWarning: true
      },
      {
        heading: '😵 Bilinci Kaybolursa',
        content: '1. Dikkatlice yere yatırın\n2. 112\'yi arayın (henüz aranmadıysa)\n3. Temel Yaşam Desteğine başlayın',
        isImportant: true
      },
      {
        heading: '👶 Çocuklarda (1 Yaş Üstü)',
        content: 'İlk yardım YETİŞKİNLERLE AYNIDIR:\n• Kısmi tıkanma → Öksürsün\n• Tam tıkanma → Sırt vurusu + Karın basısı\n• Bilinci kaybolursa → Temel Yaşam Desteği'
      },
      {
        heading: '👼 Bebeklerde (1 Yaş Altı) - Kısmi',
        content: '✓ Bebeğin kendi öksürmesine izin verin\n✓ Kucağa alın, başını yükseltin\n✓ Kendi çabası ile çıkarmasını bekleyin\n⚠️ Müdahale etmeyin (durumu kötüleştirebilir)'
      },
      {
        heading: '👼 Bebeklerde Tam Tıkanıklık',
        content: 'SIRT VURUSU (5 defa):\n1. Bebeği yüzü aşağı, baş aşağıda ön kolunuza yatırın\n2. Başı çene altından destekleyin\n3. Kürek kemikleri arasına aşağı-ileri yönde sert vurun\n\nGÖĞÜS BASISI (5 defa):\n1. Bebeği sırt üstü, baş aşağıda çevirin\n2. Meme çizgisinin bir parmak altına 2 parmak yerleştirin\n3. Göğsün 1/3\'ü çökecek kadar basın\n\nDönüşümlü devam edin:\n→ 5 sırt vurusu + 5 göğüs basısı\n→ Cisim çıkana veya bilinç kaybolana kadar',
        isImportant: true
      },
      {
        heading: '⚠️ Önemli Uyarılar',
        content: '🚨 Tekrar normal nefes alsa bile mutlaka hastaneye götürün!\n   • Yabancı cisim içeride kalabilir\n\n⛔ YAPMAYIN:\n• Rastgele parmak süpürme\n• Emin olmadan ağıza müdahale\n• Cismi arkaya itme\n\n✅ HER ZAMAN:\n• 112\'yi arayın\n• Yalnız bırakmayın\n• Sakin kalın',
        isWarning: true
      },
      {
        heading: '🎯 Evrensel Boğulma İşareti',
        content: '👐 Eller boyna gider → Acil müdahale!',
        isHighlight: true
      },
      {
        heading: '📞 Acil Durum',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  },
  7: {
    title: 'Bilinç Bozukluklarında İlkyardım',
    icon: '😵',
    sections: [
      {
        heading: 'Bilinç Değerlendirmesi - USAY (AVPU)',
        content: 'U - Uyanık: Kişi uyanık mı?\nS - Sesli uyaran: Seslenince gözlerini açıyor mu?\nA - Ağrılı uyaran: Ağrılı uyaranlara yanıt veriyor mu?\nY - Yanıt yok: Hiçbir uyarana yanıt vermiyor',
        isHighlight: true
      },
      {
        heading: '😵 Bayılma (Senkop)',
        content: 'Beyne giden kan akışının geçici azalmasına bağlı bilinç kaybı\n\nNedenleri:\nKorku, heyecan, sıcak, yorgunluk, kan basıncı düşmesi, kan şekeri düşmesi\n\nBelirtileri:\n• Baş dönmesi, sersemlik\n• Bulantı, halsizlik\n• Terleme, çarpıntı\n• Soğuk cilt\n• Bulanık görme\n• Kulakta çınlama'
      },
      {
        heading: 'Bayılmada İlk Yardım',
        content: '1. Düz zemine sırt üstü yatırın\n2. Şok pozisyonu verin (bacakları 30-60° kaldırın)\n3. Sıkan giysileri gevşetin\n4. Yaşam bulgularını gözlemleyin\n5. Hamile (20+ hafta) ise: Sol tarafa yan yatırın\n\n⛔ YAPMAYIN:\n• Kolonya, amonyak koklatmayın\n• Yiyecek/içecek vermeyin\n• Tokat atmayın\n• Sandalyeye oturtmayın',
        image: 'recovery_position',
        imageCaption: 'Derlenme (Koma) Pozisyonu',
        isImportant: true
      },
      {
        heading: '🧠 İnme (Felç) - FAST Testi',
        content: 'Beyindeki damarın tıkanması veya kanaması\n\nFAST Testi:\nF - Face (Yüz): Gülümseyin → Bir taraf düşüyor mu?\nA - Arms (Kollar): Kolları kaldırın → Biri düşüyor mu?\nS - Speech (Konuşma): Cümle tekrarlayın → Konuşma bozuk mu?\nT - Time (Zaman): Herhangi biri zorsa → Acilen 112!',
        isWarning: true
      },
      {
        heading: 'İnmede İlk Yardım',
        content: '✓ Rahat pozisyon verin (uzanma/yaslanma)\n✓ Oturamıyorsa derlenme pozisyonu\n✓ Hemen 112\'yi arayın\n✓ Yiyecek/içecek vermeyin (boğulma riski)\n✓ Yalnız bırakmayın'
      },
      {
        heading: '⚡ Sara (Epilepsi) Nöbeti',
        content: 'Belirtiler:\n• Ani bilinç kaybı, yere düşme\n• Tüm vücutta kasılmalar\n• Dudaklar mavi-gri\n• Ağızdan köpük (pembe ise dil ısırılmış)\n• İdrar kaçırma'
      },
      {
        heading: 'Sara Nöbetinde İlk Yardım',
        content: 'Nöbet Sırasında:\n1. Çevreyi güvenli hale getirin (eşyaları uzaklaştırın)\n2. Başın altına yumuşak malzeme koyun\n3. Gözlemleyin\n\nNöbet Sonrası:\n1. Derlenme pozisyonuna getirin\n2. Tamamen uyanana kadar yalnız bırakmayın\n\n112 ne zaman aranır?\n• İlk nöbet\n• 5+ dakika sürüyorsa\n• Tekrarlayan nöbetler\n• Nöbet sonrası bilinç açılmıyorsa',
        isImportant: true
      },
      {
        heading: '⛔ Sara Nöbetinde Yapılmaması Gerekenler',
        content: '• Nöbeti durdurmaya çalışmayın\n• Ağza parmak/cisim sokmayın\n• Yiyecek/içecek vermeyin\n• Üzerine su dökmeyin',
        isWarning: true
      },
      {
        heading: '🌡️ Çocukluk Çağı Ateş Nöbeti',
        content: '5 yaş altı çocuklarda yüksek ateş nedeniyle\n\nİlk Yardım:\n1. Mutlaka 112\'yi arayın\n2. Giysileri çıkarın\n3. Çevreyi güvenli hale getirin\n4. Derlenme pozisyonu\n5. Oda sıcaklığında su ve havlu ile vücut sıcaklığını düşürün\n\n⚠️ Soğuk su dökmeyin!'
      },
      {
        heading: '🍬 Kan Şekeri Düşüklüğü',
        content: 'Belirtiler:\nGüçsüzlük, sersemlik, terleme, titreme, bulanık görme, bilinç kaybı\n\nBilinci Açıksa:\n1. Güvenli yere oturtun/uzatın\n2. Şeker verin (meyve suyu, şekerli süt, reçel)\n3. 10-15 dakika bekleyin\n4. 112\'yi arayın\n\nBilinci Kapalıysa:\n1. Derlenme pozisyonu\n2. Hemen 112\'yi arayın\n3. Yiyecek/içecek vermeyin',
        isImportant: true
      },
      {
        heading: '⚠️ Kan Şekeri Uyarısı',
        content: 'Düşüklük mü yükseklik mi emin değilseniz → Şeker verin! (Düşüklük hızla öldürür)',
        isWarning: true
      },
      {
        heading: '📈 Kan Şekeri Yüksekliği',
        content: 'Belirtiler:\nBulantı, kusma, nefeste çürük elma kokusu, susuzluk, hızlı nefes\n\nİlk Yardım:\n1. Bilinci açıksa su içmeye teşvik edin\n2. 112\'yi arayın\n3. Reçeteli ilaç varsa kullanmasına yardım edin\n4. Bilinci kapanırsa derlenme pozisyonu'
      },
      {
        heading: '🐝 Şiddetli Alerji (Anafilaksi)',
        content: 'Belirtiler:\n• Yüz, dudak, dil şişmesi\n• Yaygın kızarıklık, kurdeşen\n• Hırıltılı solunum\n• Solunum zorluğu\n• Baş dönmesi, bayılma\n\nİlk Yardım:\n1. Rahat nefes alacağı pozisyon\n2. Hemen 112\'yi arayın\n3. Yanından ayrılmayın\n\n⚠️ Tedavi edilmezse dakikalar içinde ölüm!',
        isWarning: true
      },
      {
        heading: '🫁 Astım Atağı',
        content: 'Belirtiler:\nNefes darlığı, hızlı nefes, öksürük, nefes verirken ıslık sesi\n\nİlk Yardım:\n1. Sakinleştirin\n2. Oturur pozisyon (zorla yatırmayın)\n3. Pencereleri açın, sıkan giysileri gevşetin\n4. İlaç (inhaler) kullanmasına yardım edin\n5. 5 dakika içinde düzelme yoksa → 112\'yi arayın'
      },
      {
        heading: '😮‍💨 Hiperventilasyon',
        content: 'Stres ve duygusal sıkıntılara bağlı çok hızlı nefes alma\n\nBelirtiler:\nNefes darlığı, karıncalanma, baş dönmesi\n\nİlk Yardım:\n1. Güven verin, sakin yerde oturtun\n2. Yavaş nefes almayı öğretin:\n   • Burundan yavaş nefes al\n   • 1-2 saniye tut\n   • Dudakları büzerek ağızdan yavaş ver'
      },
      {
        heading: '🎯 Genel Kurallar',
        content: 'Her durumda:\n• Yaşam bulgularını kontrol edin\n• Bilinç kapanırsa derlenme pozisyonu\n• Solunum durursa Temel Yaşam Desteği\n• Hasta/yaralıyı yalnız bırakmayın',
        isHighlight: true
      },
      {
        heading: '📞 Acil Durum',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  },
  8: {
    title: 'Kırık, Çıkık ve Burkulmalarda İlkyardım',
    icon: '🦴',
    sections: [
      {
        heading: 'Kırık Nedir?',
        content: 'Kemikteki kırılma veya çatlama\n\nKırık Tipleri:\n\nKapalı Kırık:\n• Cilt sağlam\n• Kemik uçları içeride\n\nAçık Kırık:\n• Cilt açık, kemik görünür\n• Kanama var\n• Enfeksiyon riski yüksek',
        isHighlight: true
      },
      {
        heading: '🚨 Kırık Belirtileri',
        content: '• Ağrı (hareketle artar)\n• Hassasiyet, dokunmakla artan ağrı\n• Çıtırtı sesi (araştırmayın!)\n• Şekil bozukluğu, şişme, morarma\n• Kısalma, eğilme, bükülme\n• Hareket kaybı, yürüyememe\n• Açık yara ve kanama\n• Şok belirtileri (uyluk/leğen kemiği kırıkları)'
      },
      {
        heading: 'Kırıklarda İlk Yardım',
        content: 'Temel Amaçlar:\n1. Hareketi önlemek\n2. Hastaneye nakilde rahat ettirmek\n\nAdımlar:\n1. Daha acil yaralanma var mı kontrol edin\n2. Sabitleninceye kadar hareket ettirmeyin\n3. Yaralıyı sakinleştirin\n4. Yaralı kısmı destekleyin\n5. Atel veya bandaj ile sabitleyin\n6. Dolaşımı kontrol edin\n7. 112\'yi arayın\n8. Yiyecek/içecek vermeyin\n9. Kanama varsa bası uygulayın',
        isImportant: true
      },
      {
        heading: '⚠️ Kırıklarda Dikkat',
        content: '⛔ Kırık olup olmadığından emin değilseniz → Kırık kabul edin\n⛔ Şekil bozukluğu varsa → Düzeltmeye çalışmayın!\n⛔ Kırık yere sert basmayın!\n⛔ Çıtırtı sesi duymak için uğraşmayın!',
        isWarning: true
      },
      {
        heading: 'Çıkık Nedir?',
        content: 'Eklemi oluşturan kemiklerin yer değiştirmesi, eklem yüzeylerinin tamamen bozulması\n\nBelirtileri:\n• Ağrı\n• Şişlik\n• Şekil bozukluğu\n• Morarma/kızarıklık\n• Hareket zorluğu'
      },
      {
        heading: 'Çıkıklarda İlk Yardım',
        content: '1. Eklemi hareket ettirmeyin\n2. Sabit pozisyonda tutun\n3. YERİNE OTURTMAYA ÇALIŞMAYIN! (Kaslara, bağlara, sinirlere zarar verir)\n4. Buz uygulayın: Bez/havluya sarın, doğrudan cilde değmesin, en fazla 20 dakika\n\n⚠️ Çıkık mı kırık mı ayırt etmek zor → Kırık kabul edin',
        isImportant: true
      },
      {
        heading: 'Zorlanma ve Burkulma',
        content: 'Zorlanma: Aşırı gerginlikten kaynaklanan kas liflerinde yaralanma\n\nBurkulma: Eklemin bağlarında veya çevresindeki dokularda yaralanma\n\nBelirtileri:\n• Ağrı (kasta veya eklem çevresinde)\n• Şişme\n• Morarma\n• Hareket kaybı'
      },
      {
        heading: 'Zorlanma/Burkulmada İlk Yardım',
        content: '1. Elleri yıkayın, eldiven kullanın\n2. Buz uygulayın (bez/havluya sarın, max 20 dk)\n3. Dinlenme sağlayın, hareket ettirmeyin\n\n⛔ YAPMAYIN:\n• Baskılı bandaj uygulamayın\n• Masaj yapmayın\n\n⚠️ Ağrı şiddetli veya kötüleşiyorsa → Hastaneye!'
      },
      {
        heading: '🎯 Atel (Sabitleme) Prensipleri',
        content: '✓ Yaralı kısmı hareketsiz tutun\n✓ Üst ve alt eklemi dahil edin\n✓ Dolgu malzemesi kullanın (havlu, yastık)\n✓ Düğümleri yaralanmadan uzakta yapın\n✓ Dolaşımı kontrol edin (10 dk\'da bir)\n✓ Solukluk, soğukluk, morarma, uyuşma varsa → Gevşetin',
        isHighlight: true
      },
      {
        heading: '💪 Üst Uzuv Sabitleme',
        content: 'Köprücük/Omuz: Kol askısı, kolu göğse sabitleyin\n\nÜst Kol: Kol askısı (kırığın altında), kol-gövde arası dolgu\n\nDirsek: Oturur pozisyon, dirsek çevresine dolgu\n\nÖnkol/Bilek: Dolgu ile sarın, kol askısı\n\nEl/Parmak: Yüzük, bilezik çıkarın (şişmeden önce), kabarık olmayan dolguyla sarın'
      },
      {
        heading: '🦵 Alt Uzuv Sabitleme',
        content: 'Leğen Kemiği: Sırt üstü, bacaklar düz, diz ve ayak bileğine dolgu, bacakları birbirine sabitleyin\n\nKalça/Uyluk: Uzun tespit (koltuk altı→ayak), sedye ile taşıyın\n\nBacak: Diğer bacağı kullanın, her iki bacağı birlikte sabitleyin\n\nDiz: Yatırın, diz altına yastık/dolgu\n\nAyak Bileği: Destek, bandaj, soğuk kompres (max 20 dk), uzvu kaldırın'
      },
      {
        heading: '🧊 Buz Uygulama Kuralları',
        content: '✓ Bez veya havluya sarın\n✓ Doğrudan cilde temas ettirmeyin\n✓ Buz yoksa soğuk su veya kompres\n✓ En fazla 20 dakika\n\nFaydaları: Ağrıyı azaltır, iyileşmeye katkı sağlar',
        isHighlight: true
      },
      {
        heading: '⚠️ Genel Uyarılar',
        content: '• Bilinci kapalı ama solunumu varsa → Derlenme pozisyonu\n• Solunumu durursa → Temel Yaşam Desteği\n• Şüphe varsa → Kırık/çıkık kabul edin\n• Dolaşım bozukluğu varsa → Bandajı gevşetin\n• Hiçbir durumda yiyecek/içecek vermeyin',
        isWarning: true
      },
      {
        heading: '📞 Acil Durum',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  },
  9: {
    title: 'Boğulmalarda İlkyardım',
    icon: '🌊',
    sections: [
      {
        heading: 'Boğulma Nedir?',
        content: 'Su/sıvıya dalma veya batma nedeniyle solunum bozukluğu yaşanması\n\n⚠️ Kişinin yüzü (ağız ve burun) su/sıvıya batmalı veya örtülmelidir',
        isHighlight: true
      },
      {
        heading: 'Boğulma Süreçleri',
        content: '1. Sudan Kurtulmuş: Suda dalma/batma ama solunum bulgusu yok (Bu boğulma değildir)\n\n2. Ölümcül Olmayan Boğulma: Kişi herhangi bir zamanda kurtarıldı, boğulma süreci durdu\n\n3. Ölümcül Boğulma: Boğulmaya bağlı ölüm'
      },
      {
        heading: '🚨 Risk Faktörleri',
        content: 'Genel:\n• 14 yaşından küçükler\n• Riskli davranışlar\n• Eğitim ve güvenlik eksikliği\n• Alkol kullanımı\n• Kalp/nörolojik hastalıklar\n\nYetişkinlerde:\n• Kan şekeri düşmesi, bayılma\n• Travma, kazalar\n• Sara nöbeti\n• Aşırı yorgunluk, kas krampları\n\nÇocuklarda:\n• Kova, tuvalet, küvete düşme'
      },
      {
        heading: '⏰ Kritik Bilgi',
        content: 'Beyin hücreleri: Oksijensizliğe 4-6 dakika dayanır\nKalp hücreleri: 30 dakika dayanır\n\n⚡ Hızlı ve etkin Temel Yaşam Desteği kalıcı hasarları önler!',
        isWarning: true
      },
      {
        heading: 'Boğulma Belirtileri',
        content: '• Ağız ve burundan köpük\n• Soluk alma güçlüğü\n• Gürültülü, hızlı, derin nefes\n• Solunumun tamamen durması\n• Bilinç değişikliği veya kaybı\n• Kalp atımlarının yavaşlaması/durması\n• Soğuk ve soluk cilt\n• Kulak, burun, dudak, tırnaklarda morarma'
      },
      {
        heading: '1. Yardım Çağırın',
        content: '• Bağırın veya yardım isteyin\n• Kişiyi yalnız bırakmayın!\n• Birine 112\'yi aratın\n• Geri dönmesini söyleyin (emin olmak için)',
        isImportant: true
      },
      {
        heading: '2. Sudan Çıkarma',
        content: '⚠️ Kendinizi tehlikeye atmayın!\n\nİlk Tercih - Suya Girmeden:\n• İp uzatın\n• Tahta parçası, kürek uzatın\n• Tutunabilecek cisim verin\n\nSuya Girilecekse (Sadece):\n• Gerekli eğitim alınmışsa\n• Yalnız değilseniz ve güvenliyse\n• Yüzer cihaz veya tekne varsa\n\nSuya girerseniz:\n• Asla başınızı suya batırmayın! (Görsel temas kaybolur)',
        isWarning: true
      },
      {
        heading: '3. Özel Durumlar',
        content: 'Kalp krizi geçiriyorsa:\n• Hızla sudan çıkarın\n• Derhal Temel Yaşam Desteğine başlayın\n\nSığ suya dalma veya yaralanma varsa:\n• Omurga koruma önlemleri alın\n• Dikkatli çıkarın'
      },
      {
        heading: '✅ Nefes Alıyorsa',
        content: '1. Derlenme (koma) pozisyonuna getirin\n2. Battaniye veya ceketle örtün (sıcak tutun)\n3. Yalnız bırakmayın\n4. Gözlemlemeye devam edin',
        isHighlight: true
      },
      {
        heading: '⚠️ Nefes Almıyorsa',
        content: '1. Boğulma nedenlerini ortadan kaldırın\n2. Sırt üstü değilse sırt üstü döndürün\n3. Yanına diz çökün\n4. Derhal Temel Yaşam Desteğine başlayın',
        isImportant: true
      },
      {
        heading: '🤮 Önemli Bilgi',
        content: 'Boğulma sırasında:\n• Su/sıvının çoğu yutulur\n• Hastaların %60\'ı sonra kusar\n• Mide içeriği akciğerlere kaçabilir\n• Solunum daha fazla hasar görür\n\nBu yüzden derlenme pozisyonu önemli!'
      },
      {
        heading: '🎯 Temel Prensipler',
        content: '1. Güvenlik önce (kendiniz + kişi)\n2. Hızlı kurtarma (mümkünse suya girmeden)\n3. Omurga koruma (yaralanma şüphesi varsa)\n4. Sıcak tutma (hipotermi riski)\n5. Sürekli gözlem (yalnız bırakmayın)\n6. Hızlı müdahale (Temel Yaşam Desteği)',
        isHighlight: true
      },
      {
        heading: '📞 Acil Durum',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  },
  10: {
    title: 'Böcek Sokmalarında İlkyardım',
    icon: '🐝',
    sections: [
      {
        heading: '🐶 Hayvan Isırıkları',
        content: 'Köpek, Kedi, At, İnek\n\nİki Ana Sorun:\n1. Doku yaralanması\n2. Enfeksiyonlar (Tetanoz ve Kuduz)\n\n⚠️ Acilen tedavi edilmezse öldürücüdür!\n\nBelirtiler:\n• Isırık ve diş izleri\n• Cilt ve cilt altı yaraları\n• Doku kayıpları\n• Kanama, şişlik, kızarıklık, ağrı',
        isWarning: true
      },
      {
        heading: 'Hayvan Isırıklarında İlk Yardım',
        content: '1. Elleri yıkayın, eldiven giyin\n2. Isırık yerini 10-15 dakika su ve sabunla yıkayın\n3. Şiddetli kanama varsa → Doğrudan bası\n4. Yarayı kuru temiz bezle örtün\n5. Sağlık kuruluşuna başvurun (Kuduz/tetanoz aşısı için)\n6. Ciddi ve hayati tehlike varsa → 112',
        isImportant: true
      },
      {
        heading: '⛔ Hayvan Isırıklarında Yapılmaması Gerekenler',
        content: '• Yara üzerine yabancı madde dökmeyin (ot, biber, yağ, benzin)\n• Hayvana yaklaşmayın, yakalamaya çalışmayın\n• Gerekli değilse hayvanı öldürmeyin\n• Eldivensiz ölü hayvana dokunmayın\n\n✓ Kuduz aşısı olmayan hayvanları 10 gün gözetim altında tutun',
        isWarning: true
      },
      {
        heading: '🐍 Yılan Isırıkları',
        content: '⚠️ Tüm yılan ısırıklarına zehirliymiş gibi davranın!\n\nYerel Belirtiler:\n• Kanama, şişlik, morarma\n• Ağrı, uyuşma, diş izleri\n\nGenel Belirtiler:\n• Görme bulanıklığı\n• Konuşma bozukluğu\n• Bulantı, kusma\n• Nefes darlığı'
      },
      {
        heading: 'Yılan Isırığında İlk Yardım',
        content: '1. Uzanması ve hareket etmemesini söyleyin (zehrin yayılmasını yavaşlatır)\n2. Eldiven giyin\n3. Yüzük, saat gibi takıları çıkarın (şişme nedeniyle)\n4. Yarayı temiz bezle örtün\n5. Kol/bacaksa → Bandaj (dolaşımı engellemeden)\n6. 112\'yi arayın\n7. Yanında kalın, yaşamsal bulguları izleyin',
        isImportant: true
      },
      {
        heading: '⛔ Yılan Isırığında Asla Yapmayın',
        content: '❌ Soğuk veya buz uygulamayın\n❌ Yarayı emmeyin, kesmeyin\n❌ Enjeksiyon yapmayın\n❌ Turnike uygulamayın',
        isWarning: true
      },
      {
        heading: '🪼 Denizanası Sokmaları',
        content: 'Yerel: Kızarıklık, ağrı, kaşıntı, uyuşma\nSistemik: Kas ağrısı, kusma, tansiyon yükselmesi\n\nİlk Yardım:\n1. Ovmasını önleyin\n2. Dokunaçları çıkarın (kredi kartı ile kazıyın)\n3. Deniz suyu, karbonat+sirke veya ısı uygulayın\n❌ Tatlı su kullanmayın! (Daha fazla zehir açığa çıkar)\n4. Ölümcül türlerin olduğu bölgelerde → Hemen 112'
      },
      {
        heading: '🕷️ Kene Isırıkları',
        content: '⚠️ 24+ saat vücutta kalırsa hastalık riski artar!\n\nHastalıklar: Kırım-Kongo Kanamalı Ateşi, Lyme, Tularemi\n\nKene Çıkarma:\n1. Eldiven giyin\n2. İnce cımbız kullanın\n3. Baş kısmından tutun (cilde en yakın yerden)\n4. Yukarı doğru çekin (sıkmadan)\n5. Baş ve ağız kısmı tam çıksın\n\n✓ Çıkardıktan sonra mutlaka sağlık kuruluşuna',
        isImportant: true
      },
      {
        heading: '⛔ Kene Çıkarırken Yapmayın',
        content: '❌ Bükmeyin, sarsmayın\n❌ Gövdesini sıkmayın, ezmeyin, patlatmayın\n❌ Vazelin, alkol, benzin kullanmayın\n❌ Sıcak uygulamayın, yakmaya çalışmayın',
        isWarning: true
      },
      {
        heading: '🦂 Akrep Sokmaları',
        content: 'Özellikle Güneydoğu Anadolu Bölgesi\n\nİlk Yardım:\n1. Sakinleştirin\n2. Etkilenen bölgeyi hareket ettirmeyin\n3. Su ve sabunla yıkayın\n4. 15 dakika soğuk uygulama\n5. Bandaj (dolaşımı engellemeden)\n6. Kesme/emme yapmayın\n7. 112\'yi arayın'
      },
      {
        heading: '🐝 Arı Sokmaları',
        content: 'Tehlikeli Durumlar:\n• Birkaç yerden soktu\n• Nefes borusuna yakın soktu\n• Kişi alerjik\n\n🚨 Alerjik kişilerde tek sokma bile dakikalar içinde şok yapabilir!',
        isWarning: true
      },
      {
        heading: 'Arı Sokmasında İlk Yardım',
        content: '1. Bölgenin güvenli olduğundan emin olun\n2. Su ve sabunla yıkayın\n3. İğneyi çıkarın: Kredi kartı ile kazıyın (❌ Cımbızla sıkmayın!)\n4. Soğuk uygulama\n5. 112 arayın: Ağız içi sokması, alerji hikayesi, sistemik bulgular\n6. Epinefrin varsa → Bacak kasına uygulayın',
        isImportant: true
      },
      {
        heading: '🚨 Alerjik Reaksiyon Belirtileri',
        content: '⚠️ Hayatı tehdit eder! Acil müdahale gerekir!\n\n• Döküntü, kaşıntı\n• Kas krampları, titreme\n• Hırıltı, nefes darlığı\n• Baş dönmesi, bayılma\n• Yutma güçlüğü\n• Yüz ve dudak şişliği\n• Bulantı, kusma, ishal\n• Şok',
        isWarning: true
      },
      {
        heading: '⛔ Tüm Isırıklarda Asla Yapmayın',
        content: '❌ Yarayı emmeyin (ağız, şırınga, vakum)\n❌ Yarayı kesmeyin\n❌ Enjeksiyon yapmayın\n❌ Dağlamayın\n\nBu işlemler enfeksiyona yol açar, yara iyileşmesini geciktirir, zehri daha hızlı yayar'
      },
      {
        heading: '📞 Acil Durum',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  },
  11: {
    title: 'Yanık, Soğuk ve Sıcak Acillerinde İlkyardım',
    icon: '🔥',
    sections: [
      {
        heading: '🔥 Yanıklar - Genel Bilgi',
        content: 'Cilt ve/veya cilt altı dokularda ısı, soğuk, elektrik, radyasyon veya kimyasal ajanlara maruz kalarak oluşan hasarlanma\n\nYanık Türleri:\n1. Termal (Isı) Yanıkları\n2. Kimyasal Yanıklar\n3. Elektrik Yanıkları',
        image: 'burn_degrees',
        imageCaption: 'Yanık Dereceleri - 1., 2. ve 3. Derece',
        isHighlight: true
      },
      {
        heading: 'Termal (Isı) Yanıklar',
        content: 'En sık görülen yanık tipi (ev kazaları)\n\n44°C altı: Genellikle tolere edilir\n60°C üstü: Hücre ölümü\n\nCiddiyeti Belirleyen Faktörler:\n• Derinlik, yaygınlık, bölge\n• Enfeksiyon riski, yaş\n• Solunum yolu hasarı'
      },
      {
        heading: 'Termal Yanıklarda İlk Yardım',
        content: '1. Yanma nedenini ortadan kaldırın\n2. Alev almış kişi: Koşmasını engelleyin, yerde yuvarlansın\n3. Güvenli alana taşıyın\n4. Yaşam belirtilerini değerlendirin\n5. Solunum yolu kontrol edin (etkilenme varsa → 112)\n\nSOĞUTMA:\n• En az 20 dakika soğuk su altında tutun\n• Büyük yanıklarda su ile ıslatılmış bez örtün\n• Battaniye ile örtün (ısı kaybını önleyin)',
        isImportant: true
      },
      {
        heading: 'Termal Yanıklarda Devam',
        content: '7. Giysileri çıkarın (cildi kaldırmadan, soğutma sonrasında)\n8. Tiftiksiz, kuru, temiz malzeme ile örtün (Streç film)\n9. Yüzük, bilezik, saat çıkarın\n10. Yanık kolları/bacakları kalp seviyesinden yüksekte tutun (24-48 saat)'
      },
      {
        heading: '⛔ Termal Yanıklarda Asla Yapmayın',
        content: '❌ Kabarcıkları patlatmayın\n❌ Diş macunu, yoğurt, buz, pudra, merhem sürmeyin\n❌ Bandaj veya gazlı bez uygulamayın',
        isWarning: true
      },
      {
        heading: '🧪 Kimyasal Yanıklar',
        content: 'Genellikle iş kazaları - Asit, alkali, petrol ürünleri\n\n⚠️ Kimyasal madde uzaklaştırılıncaya kadar yanma devam eder!\n\nBelirtiler:\n• Şiddetli batma, ağrı\n• Cilt tahrişi, renk solması\n• Şişlik, kabarcıklar\n• Zehirlenme belirtileri'
      },
      {
        heading: 'Kimyasal Yanıklarda İlk Yardım',
        content: '1. Kendinizi koruyun: Eldiven giyin\n2. 112\'yi arayın\n3. YIKAMA:\n   • Toz kimyasal: Önce fırçalayın, sonra 10-15 dk su ile yıkayın\n   • Alkali: Yıkama süresini uzatın\n   • Ambalaj uyarılarına dikkat!\n4. Bulaşmış giysileri çıkarın\n5. Etkilenen alanı temiz bezle sarın',
        isImportant: true
      },
      {
        heading: '⚡ Elektrik Yanıkları',
        content: 'Düşük/yüksek voltaj veya yıldırım\n\n⚠️ Giriş ve çıkış noktalarında yanık + İçerde gözle görünmeyen hasarlar!\n\nBelirtiler:\n• Bilinç kaybı\n• Nefes darlığı/durması\n• Düzensiz kalp atımı\n• Kalp durması\n• Yanık yaraları\n• Kas spazmı',
        isWarning: true
      },
      {
        heading: 'Elektrik Yanıklarında İlk Yardım',
        content: '⚠️ ÖNCELİK: GÜVENLİK!\n\nAsla dokunmayın! (Hala elektrik kaynağına bağlıysa)\n\n1. Elektrik kaynağını ana sigortadan kapatın\n2. Yüksek voltaj (+1000V): 18 metreye kadar sıçrayabilir!\n3. Ev elektriği (220V): Kuru, iletken olmayan nesne kullanın\n4. Yıldırım: Kapalı mekanda bekleyin, ağaçlardan uzak durun\n5. 112\'yi arayın',
        isImportant: true
      },
      {
        heading: '❄️ Donma',
        content: 'Dokuların soğuğa maruz kalarak hasarlanması\n\nRisk Faktörleri: Aşırı soğuk, yetersiz/ıslak giysiler, soğuk rüzgar\n\nEn Çok Etkilenen: Eller, ayaklar, kulaklar, burun, dudaklar\n\nBelirtiler:\n• İğnelenme, zonklama, ağrı\n• Soğukluk, solukluk, beyazlaşma\n• İlerlemiş: Sert ve donmuş his, cilt beyaz/mavi'
      },
      {
        heading: 'Donmada İlk Yardım',
        content: '1. Sıcak ve kapalı ortama alın (⚠️ Ayak üzerinde yürütmeyin!)\n2. Islak giysileri çıkarın, kuru giydirin\n3. Eldiven, yüzük, çizme çıkarın\n4. Bilinci açıksa → Sıcak içecekler\n5. Göğüs, koltuk altı, kasığa ılık su paketleri\n6. En az 30 dakika ısıtın\n\n⛔ Etkilenen bölgeyi ovmayın\n⛔ Doğrudan ısı uygulamayın (ateş, ısıtıcı)\n⛔ Sigara içirmeyin',
        isImportant: true
      },
      {
        heading: '🌡️ Hipotermi',
        content: 'Vücut sıcaklığı 35°C altına düşmesi\n\n⚠️ Hayatı tehdit eder!\n\nBelirtiler:\n• Titreme (azalabilir/durabilir)\n• Konuşma bozukluğu\n• Yavaş/sığ solunum\n• Zayıf nabız\n• Koordinasyon eksikliği\n• Bilinç kaybı',
        isWarning: true
      },
      {
        heading: 'Hipotermide İlk Yardım',
        content: '1. Sıcak ve kapalı ortama taşıyın\n2. Baş ve boynu rüzgardan koruyun\n3. Islak giysileri çıkarın, örtün\n4. Yavaş yavaş ısıtın (boyun, göğüs, kasığa kompres)\n5. Yudum yudum ılık, tatlı, alkolsüz içecek\n\n⛔ Doğrudan ısı uygulamayın\n⛔ Kolları/bacakları ısıtmayın/masaj yapmayın\n7. 112\'yi arayın'
      },
      {
        heading: '☀️ Sıcak Yorgunluğu',
        content: 'Hafif seyirli - Uzun süre sıcağa maruz + Yetersiz sıvı\n\nBelirtiler: Aşırı terleme, solgunluk, kas krampları, baş ağrısı, hızlı-zayıf nabız\n\nİlk Yardım:\n1. Serin yere taşıyın\n2. Şok pozisyonu\n3. Temiz bez ile silin veya serin duş\n4. ⚠️ İstisnai: Bol su içirin\n5. 112\'yi arayın'
      },
      {
        heading: '☀️ Sıcak Çarpması',
        content: '⚠️ Ölümcül olabilir! Vücut sıcaklığı 41.1°C ve üstü\n\nBelirtiler:\n• Sıcak, kırmızı, KURU cilt\n• Terleme YOK\n• Baş ağrısı, nöbet, koma\n\nİlk Yardım:\n1. Serin ortama alın\n2. Şok pozisyonu\n3. SOĞUTMA (38-39°C\'de durdurun)\n4. Bol su içirin\n5. Hemen 112\'yi arayın',
        isWarning: true
      },
      {
        heading: '📞 Acil Durum',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  },
  12: {
    title: 'Göz, Kulak ve Buruna Yabancı Cisim Kaçmasında İlkyardım',
    icon: '👁️',
    sections: [
      {
        heading: '👁️ Göze Yabancı Cisim Kaçması',
        content: 'Yaygın Cisimler: Toz, kömür, böcek, metal parçacıklar, kirpikler\n\n⚠️ Demir ve ahşap parçaları korneaya saplanabilir → Ciddi sorun!\n\nBelirtiler:\n• Ağrı, rahatsızlık\n• Kızarıklık, sulanma\n• Bulanık görme\n• Kaşınma hissi',
        isHighlight: true
      },
      {
        heading: 'Göze Yabancı Cisim İlk Yardım',
        content: 'Temel Kurallar:\n✅ Eller temiz olmalı\n✅ Gözü ovdurmayın\n\nAdımlar:\n1. Hasta/yaralıyı oturtun\n2. Gözü ovmamasını söyleyin\n3. Göz kapaklarını nazikçe açın\n4. YIKAMA: Burun tarafından başlayın, dışa doğru\n   • Oda sıcaklığında temiz su\n   • Diğer göze su kaçmasın',
        isImportant: true
      },
      {
        heading: 'Cisim Görünmüyorsa',
        content: 'Yöntem 1: Üst kirpikleri tutun, üst kapağı alt kapağın üzerine çekin\n\nYöntem 2: Fincan/Leğen - Temiz suda gözünü kapatıp açsın\n\nYöntem 3: Toz görülebiliyorsa - Temiz peçete ile gözün renkli kısmına değmeden alın'
      },
      {
        heading: '⚠️ Göze Cisim Kaçmasında Dikkat',
        content: '⛔ ASLA YAPMAYIN:\n• Gözü ovalamayın/kaşımayın\n• Göz bebeğine yapışmış/gömülü cisme dokunmayın\n• Çıkarmaya çalışmayın!\n\n✅ Yapışmış/Gömülü Cisim → En yakın sağlık kuruluşuna',
        isWarning: true
      },
      {
        heading: '👂 Kulağa Yabancı Cisim Kaçması',
        content: 'Çocuklarda: Boncuk, oyuncak parçaları, bakliyat\nGenel: Kulak temizleme çubuğu pamuğu, böcekler\n\nBelirtiler:\n• Ağrı, kaşıntı\n• İşitme azalması/kaybı\n• Kulaktan kan\n• Baş dönmesi, bulantı'
      },
      {
        heading: 'Kulağa Yabancı Cisim İlk Yardım',
        content: '1. Sakinleştirin\n2. Tamamen dışarıda görünüyor ve alabilecekseniz: İçeri ilerletmeden alın\n3. Düğme pil görüyorsanız: Çıkarın veya direkt sağlık kuruluşuna\n4. Çıkartılamıyorsa: Sağlık kuruluşuna yönlendirin\n\n⛔ Zorlamayın - Daha derine ilerletip kulak zarına zarar verebilirsiniz\n⛔ Düğme pil üzerine su dökmeyin',
        isImportant: true
      },
      {
        heading: '👃 Buruna Yabancı Cisim Kaçması',
        content: 'Küçük çocuklarda sık görülür\n\nRiskler: Tıkanıklık, enfeksiyon, kesikler, piller → yanık\n\nBelirtiler:\n• Ağrı, burun akıntısı\n• Kötü koku, şişlik\n• Burun kanaması\n• Gözlerde yaşarma\n• Zor ve gürültülü solunum'
      },
      {
        heading: 'Buruna Yabancı Cisim İlk Yardım',
        content: '1. Sakinleştirin\n2. Solunum sıkıntısı varsa: Ağızdan sakin nefes almasını söyleyin\n3. Sağlık kuruluşuna yönlendirin\n\n⛔ ASLA YAPMAYIN:\n• Yabancı cisme dokunmayın\n• Çıkarmaya çalışmayın\n• Cımbız, şiş gibi aletleri burun içine sokmayın',
        isWarning: true
      },
      {
        heading: '🤤 Yutulan Yabancı Cisimler',
        content: '1. Sakinleştirin, güven verin\n2. Yutulan cismin ne olduğunu öğrenin\n3. Kusmamasına dikkat edin\n\n⚠️ Mutlaka sağlık kuruluşuna:\n• Piller, keskin nesneler\n• Sigara koçanları, kozmetikler, ilaçlar\n• Zehirli bitkiler\n• Mide ağrısı veya kanlı dışkılama varsa',
        isImportant: true
      },
      {
        heading: '🎯 Genel Prensipler',
        content: '✅ YAPILMASI GEREKENLER:\n• Sakinleştirin\n• Eller temiz olmalı\n• Emin değilseniz çıkarmaya çalışmayın\n• Şüphe varsa sağlık kuruluşuna\n\n⛔ YAPILMAMASI GEREKENLER:\n• Zorlamayın, daha derine itmeyin\n• Ovalamayın/kaşımayın\n• Aletlerle kurcalamayın',
        isHighlight: true
      },
      {
        heading: '💡 Önemli Hatırlatmalar',
        content: '🔹 Çocuklarda daha sık görülür\n🔹 Emin değilseniz müdahale etmeyin\n🔹 Daha derine itme riski yüksek\n🔹 Hijyen önemli - Eller temiz olmalı\n🔹 Sakinlik kritik'
      },
      {
        heading: '📞 Şüphe Durumunda',
        content: 'Şüphe durumunda sağlık kuruluşuna başvurun!',
        isEmergency: true
      }
    ]
  },
  13: {
    title: 'Zehirlenmelerde İlkyardım',
    icon: '☠️',
    sections: [
      {
        heading: 'Zehir Nedir?',
        content: 'Yutulduğunda, solunduğunda, enjekte edildiğinde veya cilt yoluyla emildiğinde insan sağlığına zarar veren maddeler\n\n⚠️ Bir maddenin zehirli olup olmadığını belirleyen MİKTARIDIR!',
        isHighlight: true
      },
      {
        heading: '🛡️ Korunma Yöntemleri',
        content: '✅ Çocukların erişemeyeceği yerde saklayın\n✅ Reçete dozuna uyun\n✅ Zararsız alternatifleri tercih edin\n✅ Koruyucu ekipman kullanın\n✅ Ortamı havalandırın\n✅ Zehirli madde yanında yiyecek/içecek tüketmeyin'
      },
      {
        heading: 'Zehirlenme Yolları',
        content: '1. Sindirim (Ağız): En sık - Kimyasallar, mantarlar, ilaçlar\n2. Solunum: Karbon monoksit, gaz, boya\n3. Enjeksiyon: İlaç, yılan/böcek sokması\n4. Cilt Emilimi: Temizlik/bahçe ürünleri\n5. Göze Sıçrama: Kimyasallar',
        isImportant: true
      },
      {
        heading: '🚨 Belirtiler',
        content: 'Sindirim: Bulantı, kusma, karın ağrısı, nöbet, bilinç bozukluğu\n\nSolunum: Nefes darlığı, siyanoz, kiraz kırmızısı dudaklar\n\nEnjeksiyon: Ağrı, şişlik, bulanık görme, anafilaktik şok\n\nCilt: Kimyasal yanık, döküntü, kaşıntı\n\nGöz: Ağrı, sulanma, bulanık görme'
      },
      {
        heading: '🩹 Genel İlk Yardım',
        content: '⚠️ ÖNCELİK: GÜVENLİK!\n\n1. Kendinizi koruyun (eldiven, maske)\n2. Zehirli maddeyi saptayın\n3. Zehiri uzaklaştırın:\n   • Ağız: Yedirmeyin, kusturmayın\n   • Solunum: Temiz havaya çıkarın\n   • Cilt: 20 dk soğuk su yıkama\n   • Göz: 10 dk yıkama\n4. 112\'yi arayın\n5. 114 (UZEM) danışın',
        isImportant: true
      },
      {
        heading: '💊 İlaç Zehirlenmesi',
        content: 'Nedenler: Aşırı doz, ağrı kesiciler, uyuşturucu\n\n⚠️ Küçük doz aşımları bile karaciğer yetmezliğine yol açabilir\n\nİlk Yardım:\n1. Bilinci değerlendirin\n2. Aldığı ilacı sorun\n⛔ Kusturmayın\n⛔ Yiyecek/içecek vermeyin\n3. 112 ve 114 arayın'
      },
      {
        heading: '🍄 Mantar Zehirlenmesi',
        content: '⚠️ Zehirli mantarları zehirsizlerden ayırmak mümkün değil!\n⚠️ Pişirmek zehirlenmeyi önlemez!\n\nBelirtiler: Bulantı, kusma, ishal, halüsinasyon, koma\n\nİlk Yardım:\n⛔ Kusturmayın\n⛔ Yiyecek/içecek vermeyin\n✓ 112 ve 114 arayın',
        isWarning: true
      },
      {
        heading: '🍺 Alkol Zehirlenmesi',
        content: 'Beynin aktivitesini baskılar\n\nBelirtiler:\n• Güçlü alkol kokusu\n• Bilinç bozukluğu\n• Kızarık, nemli yüz\n• Kusma\n• Hipotermi\n\nİlk Yardım:\n1. Ceket/battaniye ile örtün\n2. Kusma/bilinç kaybı → Derlenme pozisyonu\n3. 112 arayın'
      },
      {
        heading: '💨 Karbon Monoksit Zehirlenmesi',
        content: 'Kokusuz, tatsız, renksiz, havadan hafif\n\nKaynaklar: Soba, şofben, egzoz, mangal\n\nBelirtiler:\n• Yorgunluk, baş ağrısı\n• Bulantı, baş dönmesi\n• Kiraz kırmızısı renk\n• Bilinç kaybı\n\nİlk Yardım:\n1. 2-3 derin nefes alıp girin\n2. Temiz havaya çıkarın\n3. 112 arayın',
        isWarning: true
      },
      {
        heading: '🚿 Şofben Zehirlenmesi',
        content: '⚠️ Doğalgaz zehirli değil ama oksijeni tüketir → Boğulma!\n\nRisk: 6 m³\'den küçük, havalandırılmamış mekanlar\n\nİlk Yardım:\n1. Ortamdan uzaklaştırın\n2. Havalandırın\n3. Bilinç kapalı → Derlenme pozisyonu\n4. 112 arayın'
      },
      {
        heading: '⛔ Asla Yapmayın',
        content: '❌ Kusturmaya çalışmayın\n❌ Yiyecek/içecek vermeyin\n❌ Tehlikeye girmeyin\n\n✅ HER ZAMAN:\n• Önce güvenlik\n• 112\'yi arayın\n• 114 (UZEM) danışın\n• Yaşamsal bulguları izleyin',
        isWarning: true
      },
      {
        heading: '🎯 Temel Prensipler',
        content: '1. Güvenlik önce\n2. Zehiri uzaklaştırın (yola göre)\n3. Kusturmayın, yedirmeyin\n4. 112 ve 114 arayın\n5. Yaşamsal bulgular takip\n6. Temel Yaşam Desteği hazır',
        isHighlight: true
      },
      {
        heading: '📞 Önemli Numaralar',
        content: '112 - Acil Yardım\n114 (UZEM) - Ulusal Zehir Danışma Merkezi',
        isEmergency: true
      }
    ]
  },
  14: {
    title: 'Acil Taşıma Teknikleri',
    icon: '🚑',
    sections: [
      {
        heading: '⚠️ Temel Prensip',
        content: 'Gerekli olmadıkça hasta/yaralı hareket ettirilmemelidir!\n\nAncak tehlike söz konusuysa (yangın, patlama, gaz kaçağı) acil taşınması zorunlu olabilir.',
        isWarning: true
      },
      {
        heading: '📋 Vücut Mekaniği Kuralları',
        content: '✅ Yakın mesafede durun\n✅ Kuvvetli, uzun kas grupları kullanın\n✅ Diz ve kalçaları bükün\n✅ İki ayak kullanın (biri önde, biri arkada)\n✅ Karın kasları kullanın\n✅ Ağırlığı kalça kaslarına verin\n✅ Baş düz tutun\n✅ Ani dönme ve bükülmelerden kaçının',
        isHighlight: true
      },
      {
        heading: '👥 Organizasyon',
        content: '🎯 Sorumlu bir kişi olmalı:\n• Baş ve boynu tutar\n• Komutları verir\n• Hareketi yönlendirir\n\n📝 Kayıt tutun:\n• Genel durum, solunum, bilinç\n• Değişiklikler ve zamanları'
      },
      {
        heading: '🚗 Araç İçinden Taşıma (Rautek)',
        content: 'Ne zaman: Patlama, yangın, solunum durması\n\nAdımlar:\n1. Güvenlik kontrolü (kontak, el freni)\n2. Bilinç değerlendirmesi, 112\n3. Emniyet kemerini aç\n4. Koltuk altından çene kavra\n5. Yanaktan yanağa dayan\n6. Baş-boyun-omurga hizasını koru\n7. Yavaşça yere/sedyeye yerleştir',
        image: 'rautek_maneuver',
        imageCaption: 'Rautek Manevrası - Araçtan Çıkarma',
        isImportant: true
      },
      {
        heading: '🚶 Tek Kişilik Taşıma',
        content: '1. Sürükleme: Ağır hastalar, dar geçişler\n\n2. Kucakta (Önde Beşik): Çocuklar, zayıf yetişkinler\n\n3. Omuzdan Destek (Yan Koltuk): Yürüyebilen hastalar\n\n4. Sırtta Taşıma: Bilinçli hastalar\n\n5. Omuzda Taşıma (İtfaiyeci): Bilinci kapalı hastalar',
        image: 'firefighter_carry',
        imageCaption: 'İtfaiyeci Yöntemi - Omuzda Taşıma'
      },
      {
        heading: '👥 Birden Fazla Kişi ile Taşıma',
        content: 'Altın Beşik (2-4 el):\n• Bileklerden kavrama\n• Ciddi yaralanma yoksa\n\nYan Koltuk Desteği: İki yandan omuz desteği\n\nTeskerece: Biri kollardan, biri bacaklardan\n\nSandalye ile: Dar alanlar, merdiven için',
        image: 'cradle_carry',
        imageCaption: 'Altın Beşik Yöntemi - İki Kişilik Taşıma'
      },
      {
        heading: '🛏️ Geçici Sedye Oluşturma',
        content: 'Bir battaniye: Kenarları rulo yap\n\nBattaniye + İki kiriş:\n1. Battaniye yere ser\n2. 1/3\'üne birinci kiriş, katla\n3. İkinci kiriş yakına, üzerini kapla\n4. Hasta iki kiriş arasına'
      },
      {
        heading: 'Sedyeye Aktarma - Kaşık (3 kişi)',
        content: 'Tek taraftan ulaşılıyor\n\n1. kişi: Baş ve omuz\n2. kişi: Sırt alt ve uyluk\n3. kişi: Dizler altı ve bilekler\n\nKomutla göğüse çevir, dizlere koy, sedyeye yerleştir',
        isImportant: true
      },
      {
        heading: 'Sedyeye Aktarma - Köprü (4 kişi)',
        content: 'İki taraftan ulaşılıyor\n\n1. kişi: Baş, omuz, ense\n2. kişi: Kalça\n3. kişi: Dizler altı\n4. kişi: Sedyeyi it\n\nKomutla kaldır, sedyeye koy'
      },
      {
        heading: 'Karşılıklı Kaldırma (Omurga Yaralanması)',
        content: '⚠️ Omurga yaralanması şüphesinde!\n\n• İki kişi göğüs hizasında karşılıklı\n• Bir kişi diz hizasında\n• Baş-boyun eksenini koru\n• Komutla düz kaldır',
        isWarning: true
      },
      {
        heading: '🚑 Sedye Taşıma Kuralları',
        content: '✅ Sedyeye sabitleyin\n✅ Sedye daima yatay\n✅ Baş gidiş yönünde (merdiven inerken baş yukarıda)\n✅ Kas gücü fazla olan baş kısmında\n✅ Bir kişi sorumlu olmalı\n✅ Battaniye ile sarın',
        isHighlight: true
      },
      {
        heading: '🎯 Taşıma Kararı',
        content: 'Taşınmalı:\n• Yangın, patlama, gaz kaçağı\n• Yapı çökme tehlikesi\n• Solunum durması\n\nTaşınmamalı:\n• Güvenli ortam\n• Ciddi omurga şüphesi\n• Sağlık ekibi yakında\n\n📞 Şüphede: 112\'yi arayın, bekleyin'
      },
      {
        heading: '📞 Acil Durum',
        content: 'Şüphede 112\'yi arayın ve taşımayı bekleyin!',
        isEmergency: true
      }
    ]
  },
  15: {
    title: 'Temel Yaşam Desteği ve OED',
    icon: '❤️‍🩹',
    sections: [
      {
        heading: '🔌 OED Nedir?',
        content: 'Otomatik Eksternal Defibrilatör - Kalbe şok uygulamaya yarayan cihaz\n\nÖzellikler:\n• Hafif, taşınabilir\n• Kullanımı kolay\n• Pedlerle göğse şok verir\n• İlk yardım eğitimi almış herkes kullanabilir',
        isHighlight: true
      },
      {
        heading: '⚡ OED Etki Mekanizması',
        content: 'Ani kalp durması: Kalbin beklenmedik şekilde atmayı bırakması\n\n⏰ 3-5 dakika içinde şok:\n• Sağ kalıma %50-70 katkı\n• Her dakika gecikmede %10-12 düşüş\n\n💡 Kalbin elektriksel bozukluğunu düzeltir, normal ritmi sağlar',
        isImportant: true
      },
      {
        heading: 'OED Çeşitleri',
        content: 'Yarı Otomatik: Ritmi tanır, ilk yardımcı düğmeye basar\n\nTam Otomatik: Ritmi tanır, şoku kendisi verir\n\nOrtak Özellikler:\n• Açma/kapama düğmesi\n• Kablo ve pedler\n• Sesli/görsel komutlar\n• Pil ile çalışma'
      },
      {
        heading: '✅ OED Kullanım Kuralları',
        content: '1. OED solunumu değerlendirmez (İlk yardımcı yapar)\n2. Olay yeri güvenliği önce\n3. Göğüs kuru olmalı\n4. Kıllı göğüs: Tıraş edin\n5. Takı/kolye: Çıkarın\n6. İlaç bantları: Önce çıkarın\n7. Kalp pili: Pedleri 2.5 cm uzağa\n8. Analiz/şok sırasında: DOKUNMAYIN!',
        isWarning: true
      },
      {
        heading: '🔗 Yaşam Zinciri',
        content: '1. Ani kalp durmasını tanı → 112\'yi ara\n2. Erken göğüs basısı → Hemen başla\n3. Erken defibrilasyon → OED kullan\n\nTüm halkalar önemli, eksiklik başarıyı azaltır!',
        isHighlight: true
      },
      {
        heading: '👨 Erişkinlerde TYD - Başlangıç',
        content: '1. Güvenlik - Kendinizi koruyun\n2. "İyi misiniz?" Bilinç kontrolü\n\nYanıtlı: 112 ara, pozisyonunda bırak\n\nYanıtsız:\n• Yardım iste, 112 arat + OED\n• Havayolu aç (baş geri-çene yukarı)\n• Solunum kontrol (göğüs hareketi)'
      },
      {
        heading: '💪 Göğüs Basısı Tekniği',
        content: 'Yer: İman tahtasının alt yarısı\n\nPozisyon:\n• İki el üst üste, parmaklar kilitli\n• Kollar dik (90°)\n• Parmaklarla temas YOK\n\nTeknik:\n• Derinlik: 5-6 cm\n• Hız: 100-120/dakika\n• Kesinti max 10 saniye\n• Eller ayrılmasın',
        image: 'cpr_adult',
        imageCaption: 'Yetişkinlerde TYD - Göğüs Basısı',
        isImportant: true
      },
      {
        heading: 'Uygulama Seçenekleri',
        content: 'A) Yalnızca Göğüs Basısı:\n• 2 dakika boyunca 100-120/dk\n• OED gelince bağla\n\nB) Göğüs Basısı + Solunum:\n• 30 basıya 2 solunum\n• 5 kez tekrarla (2 dakika)\n• OED gelince bağla'
      },
      {
        heading: '🌬️ Solunum Desteği',
        content: 'Ağızdan Ağıza:\n• Baş geri-çene yukarı\n• Burnu kapat\n• 1 saniyede üfle\n• Göğüs kalkmalı\n\nAğızdan Buruna:\n• Ağzı kapat\n• Burna üfle'
      },
      {
        heading: '🔋 OED Uygulaması',
        content: '1. OED\'yi aç\n2. Pedleri çıkar\n3. Ped yerleştirme:\n   • Sağ köprücük altı\n   • Sol alt kaburga üstü\n4. Pedler birbirine değmesin\n5. Analiz sırasında DOKUNMAYIN\n6. Cihaz komutlarını takip et\n\nŞok verilecekse: Dokunma, düğmeye bas\nŞok gerekmiyorsa: TYD\'ye devam',
        image: 'aed_device',
        imageCaption: 'OED Cihazı ve Ped Yerleşimi',
        isImportant: true
      },
      {
        heading: '👧 Çocuklarda (1 yaş - Ergenlik)',
        content: 'Göğüs Basısı: 1 veya 2 el\nDerinlik: 5 cm (ergen 5-6)\n\nOran:\n• Tek kişi: 30:2\n• İki+ kişi: 15:2\n\nOED Ped:\n• 8+ yaş: Yetişkin\n• 1-8 yaş: Çocuk (yoksa yetişkin, ön-arka)',
        image: 'cpr_child',
        imageCaption: 'Çocuklarda TYD Uygulaması'
      },
      {
        heading: '👶 Bebeklerde (29 gün - 1 yaş)',
        content: 'Göğüs Basısı:\n• İki başparmak (2 kişi)\n• İki parmak (tek kişi)\n• Derinlik: 4 cm\n\nOran:\n• Tek kişi: 30:2\n• İki+ kişi: 15:2\n\nSolunum: Ağız-ağız+burun birden\n\nOED: Çocuk pedleri, ön-arka pozisyon',
        image: 'cpr_infant',
        imageCaption: 'Bebeklerde TYD Uygulaması',
        isHighlight: true
      },
      {
        heading: '📊 Hızlı Tablo',
        content: 'YETİŞKİN: 2 el, 5-6 cm, 30:2\nÇOCUK: 1-2 el, 5 cm, 30:2 (tek) / 15:2 (çok)\nBEBEK: 2 parmak, 4 cm, 30:2 (tek) / 15:2 (çok)\n\nHepsi için: Hız 100-120/dk'
      },
      {
        heading: '⏱️ Kritik Zamanlar',
        content: '🧠 Beyin: 4-6 dakika oksijensiz dayanır\n⚡ 3-5 dk içinde şok: %50-70 sağ kalım\n📉 Her dakika gecikmede: %10-12 düşüş\n\nBu yüzden HEMEN müdahale!',
        isWarning: true
      },
      {
        heading: '🚨 Yaşam Belirtileri',
        content: 'Aşağıdakilerden biri varsa → Derlenme pozisyonu:\n✓ Hareket\n✓ Öksürük\n✓ Normal solunum\n✓ Gözlerin açılması\n\n⚠️ OED\'yi kapatmayın, pedleri çıkarmayın!'
      },
      {
        heading: '📞 Acil Durum',
        content: 'Acil durumlarda 112\'yi aramayı unutmayın!',
        isEmergency: true
      }
    ]
  }
};

// Calculate points per question based on selected count
export const getPointsPerQuestion = (selectedQuestionCount) => {
  switch (selectedQuestionCount) {
    case 10: return 10;
    case 20: return 5;
    case 40: return 2.5;
    default: return 2.5;
  }
};

// Calculate passing score based on selected count
export const getPassingScore = (selectedQuestionCount) => {
  return selectedQuestionCount === 10 ? 80 : 85;
};

// Calculate final score based on selected count
export const calculateFinalScore = (score, selectedQuestionCount) => {
  switch (selectedQuestionCount) {
    case 10: return Math.round(score * 10);
    case 20: return Math.round(score * 5);
    case 40: return Math.round(score * 2.5);
    default: return Math.round(score * 2.5);
  }
};

// Shuffle array using Fisher-Yates algorithm
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
