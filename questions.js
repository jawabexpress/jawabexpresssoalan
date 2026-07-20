const questions = {
  darjah1: {
    matematik: [
      { soalan: "Berapakah hasil tambah 5 + 3?", A: "6", B: "7", C: "8", D: "9", jawapan: "C" },
      { soalan: "Apakah nombor selepas 19?", A: "18", B: "20", C: "21", D: "22", jawapan: "B" },
      { soalan: "Kurangkan 10 dengan 4. Berapakah baki?", A: "5", B: "6", C: "7", D: "8", jawapan: "B" },
      { soalan: "Apakah bentuk yang mempunyai 3 sisi?", A: "Bulat", B: "Segi Tiga", C: "Segi Empat", D: "Oval", jawapan: "B" },
      { soalan: "Berapakah nilai duit syiling 50 sen ditambah 20 sen?", A: "60 sen", B: "70 sen", C: "80 sen", D: "90 sen", jawapan: "B" },
      { soalan: "Nombor manakah yang paling besar antara berikut?", A: "12", B: "25", C: "19", D: "8", jawapan: "B" },
      { soalan: "Apakah hasil tolak 9 - 5?", A: "3", B: "4", C: "5", D: "6", jawapan: "B" },
      { soalan: "Ali ada 4 biji epal, ibu beri lagi 3. Berapa jumlahnya?", A: "6", B: "7", C: "8", D: "9", jawapan: "B" },
      { soalan: "Jam menunjukkan pukul berapa jika jarum pendek di angka 2?", A: "Pukul 2", B: "Pukul 12", C: "Pukul 6", D: "Pukul 1", jawapan: "A" },
      { soalan: "Apakah bentuk bola sepak?", A: "Silinder", B: "Kubus", C: "Sfera", D: "Kon", jawapan: "C" }
    ],
    bahasaMelayu: [
      { soalan: "Pilih ejaan perkataan yang betul bagi 'buku':", A: "b-u-k-u", B: "b-u-g-u", C: "p-u-k-u", D: "b-o-k-o", jawapan: "A" },
      { soalan: "Apakah suku kata awam bagi perkataan 'bola'?", A: "bo", B: "la", C: "ba", D: "bi", jawapan: "A" },
      { soalan: "Ibu memotong buah __ dengan pisau.", A: "buku", B: "epal", C: "pensel", D: "baju", jawapan: "B" },
      { soalan: "Lengkapkan ayat: Ali pergi ke sekolah ______ basikal.", A: "dengan", B: "pada", C: "dalam", D: "kepada", jawapan: "A" },
      { soalan: "Pilih haiwan yang hidup di air:", A: "Kucing", B: "Ikan", C: "Burung", D: "Ayam", jawapan: "B" },
      { soalan: "Apakah warna bendera Malaysia yang melambangkan keberanian?", A: "Biru", B: "Merah", C: "Kuning", D: "Putih", jawapan: "B" },
      { soalan: "Siapakah nama bapa kepada bapa kita?", A: "Datuk", B: "Bapa", C: "Abang", D: "Pakcik", jawapan: "A" },
      { soalan: "Pilih kata nama am:", A: "Kuala Lumpur", B: "Kucing", C: "Sang Kancil", D: "Ahmad", jawapan: "B" },
      { soalan: "Perkataan seerti bagi 'cantik' ialah:", A: "Busuk", B: "Indah", C: "Comot", D: "Kecil", jawapan: "B" },
      { soalan: "Lengkapkan simpulan bahasa: '____ mulut'", A: "Murah", B: "Berat", C: "Kaki", D: "Panjang", jawapan: "A" }
    ],
    english: [
      { soalan: "What is the color of the sky on a clear day?", A: "Red", B: "Blue", C: "Green", D: "Yellow", jawapan: "B" },
      { soalan: "How many days are there in a week?", A: "5", B: "6", C: "7", D: "10", jawapan: "C" },
      { soalan: "Choose the correct spelling:", A: "Aple", B: "Apple", C: "Apeel", D: "Apel", jawapan: "B" },
      { soalan: "What sound does a cat make?", A: "Moo", B: "Woof", C: "Meow", D: "Quack", jawapan: "C" },
      { soalan: "Which one is a fruit?", A: "Carrot", B: "Banana", C: "Potato", D: "Broccoli", jawapan: "B" },
      { soalan: "What is the opposite of 'Big'?", A: "Small", B: "Tall", C: "Hot", D: "Fast", jawapan: "A" },
      { soalan: "Choose the pronoun: '____ am a student.'", A: "He", B: "I", C: "They", D: "It", jawapan: "B" },
      { soalan: "How do you greet someone in the morning?", A: "Good night", B: "Good morning", C: "Goodbye", D: "Good afternoon", jawapan: "B" },
      { soalan: "What do you use to write on paper?", A: "Pencil", B: "Plate", C: "Spoon", D: "Shoe", jawapan: "A" },
      { soalan: "Which animal can fly?", A: "Dog", B: "Fish", C: "Bird", D: "Cat", jawapan: "C" }
    ],
    sains: [
      { soalan: "Apakah deria yang digunakan untuk melihat?", A: "Telinga", B: "Mata", C: "Hidung", D: "Kulit", jawapan: "B" },
      { soalan: "Haiwan manakah yang bertelur?", A: "Kucing", B: "Lembu", C: "Ayam", D: "Kambing", jawapan: "C" },
      { soalan: "Tumbuhan memerlukan ________ untuk membuat makanan sendiri melalui fotosintesis.", A: "Cahaya matahari", B: "Pasir", C: "Batu", D: "Plastik", jawapan: "A" },
      { soalan: "Apakah organ yang kita gunakan untuk bernafas?", A: "Jantung", B: "Paru-paru", C: "Hati", D: "Perut", jawapan: "B" },
      { soalan: "Manakah objek yang tertarik kepada magnet?", A: "Pemadam getah", B: "Paku besi", C: "Kertas", D: "Sudu plastik", jawapan: "B" },
      { soalan: "Apakah sumber haba utama di bumi?", A: "Bulan", B: "Matahari", C: "Lampu", D: "Api lilin", jawapan: "B" },
      { soalan: "Air membeku pada suhu 0 darjah Celsius menjadi:", A: "Gas", B: "Wap", C: "Ais", D: "Cecair", jawapan: "C" },
      { soalan: "Apakah warna daun yang sihat?", A: "Merah", B: "Hijau", C: "Kuning", D: "Biru", jawapan: "B" },
      { soalan: "Bahagian manakah pada tumbuhan yang menyerap air dari tanah?", A: "Daun", B: "Batang", C: "Akar", D: "Bunga", jawapan: "C" },
      { soalan: "Apakah rasa buah limau yang masih muda?", A: "Manis", B: "Masam", C: "Masin", D: "Pahit", jawapan: "B" }
    ]
  },
  darjah2: {
    matematik: [
      { soalan: "Berapakah hasil darab 4 × 5?", A: "15", B: "20", C: "25", D: "30", jawapan: "B" },
      { soalan: "Apakah nilai tempat bagi digit 7 dalam nombor 372?", A: "Sa", B: "Puluh", C: "Ratus", D: "Ribu", jawapan: "B" },
      { soalan: "128 + 45 = ?", A: "163", B: "173", C: "183", D: "193", jawapan: "B" },
      { soalan: "Berapakah baki jika 300 ditolak dengan 120?", A: "160", B: "170", C: "180", D: "190", jawapan: "C" },
      { soalan: "Bahagi 24 dengan 4. Berapakah jawapannya?", A: "5", B: "6", C: "7", D: "8", jawapan: "B" },
      { soalan: "1 meter sama dengan berapa sentimeter?", A: "10 cm", B: "100 cm", C: "1000 cm", D: "50 cm", jawapan: "B" },
      { soalan: "Pukul 3:30 petang juga boleh disebut sebagai pukul:", A: "Tiga setengah", B: "Tiga suku", C: "Empat", D: "Tiga tepat", jawapan: "A" },
      { soalan: "Berapakah bilangan hari dalam bulan Februari tahun biasa?", A: "28", B: "29", C: "30", D: "31", jawapan: "A" },
      { soalan: "RM10.00 - RM3.50 = ?", A: "RM5.50", B: "RM6.50", C: "RM7.00", D: "RM6.00", jawapan: "B" },
      { soalan: "Apakah bentuk yang mempunyai 4 sisi sama panjang?", A: "Segi Tepat", B: "Segi Empat Sama", C: "Segi Tiga", D: "Lelayang", jawapan: "B" }
    ],
    bahasaMelayu: [
      { soalan: "Pilih ayat tanya yang betul:", A: "Di manakah Ali tinggal?", B: "Ali tinggal di rumah.", C: "Wah, cantiknya baju!", D: "Tolong ambilkan buku itu.", jawapan: "A" },
      { soalan: "Kata sendi nama yang betul: 'Buku itu disimpan di ____ meja.'", A: "atas", B: "kepada", C: "pada", D: "dari", jawapan: "A" },
      { soalan: "Sinonim bagi kata 'marah' ialah:", A: "Gembira", B: "Murka / Gusar", C: "Sedih", D: "Tenang", jawapan: "B" },
      { soalan: "Pilih kata adjektif warna:", A: "Tinggi", B: "Merah", C: "Busuk", D: "Manis", jawapan: "B" },
      { soalan: "Siapakah yang merawat orang sakit di hospital?", A: "Guru", B: "Doktor", C: "Polis", D: "Pemandu", jawapan: "B" },
      { soalan: "Imbawan awalan meN- bagi kata 'tulis' ialah:", A: "Melukis", B: "Menulis", C: "Membaca", D: "Mengira", jawapan: "B" },
      { soalan: "Pilih ayat perintah larangan yang betul:", A: "Sila masuk ke dalam.", B: "Jangan buang sampah di sini.", C: "Sila duduk.", D: "Tolong senyap.", jawapan: "B" },
      { soalan: "Haiwan yang membuat sarang di pokok ialah:", A: "Ikan", B: "Burung", C: "Kura-kura", D: "Ketam", jawapan: "B" },
      { soalan: "Apakah antonim bagi perkataan 'panjang'?", A: "Tinggi", B: "Pendek", C: "Besar", D: "Luas", jawapan: "B" },
      { soalan: "Ibu bapa kita patut kita hormati dan ____.", A: "Kasihi", B: "Marahi", C: "Jauhi", D: "Biarkan", jawapan: "A" }
    ],
    english: [
      { soalan: "What is the past tense of 'go'?", A: "Goes", B: "Going", C: "Went", D: "Gone", jawapan: "C" },
      { soalan: "Which word rhymes with 'cat'?", A: "Dog", B: "Hat", C: "Sun", D: "Pen", jawapan: "B" },
      { soalan: "How many months are in a year?", A: "10", B: "11", C: "12", D: "365", jawapan: "C" },
      { soalan: "Choose the correct plural form of 'child':", A: "Childs", B: "Children", C: "Childes", D: "Child", jawapan: "B" },
      { soalan: "What do bees produce?", A: "Milk", B: "Honey", C: "Juice", D: "Water", jawapan: "B" },
      { soalan: "Which is a domestic animal?", A: "Lion", B: "Tiger", C: "Cow", D: "Shark", jawapan: "C" },
      { soalan: "Fill in the blank: 'She ____ reading a book.'", A: "is", B: "are", C: "am", D: "be", jawapan: "A" },
      { soalan: "What color do you get when you mix Red and Yellow?", A: "Green", B: "Orange", C: "Purple", D: "Pink", jawapan: "B" },
      { soalan: "Where do we borrow books?", A: "Library", B: "Market", C: "Hospital", D: "Cinema", jawapan: "A" },
      { soalan: "Which season is very cold and has snow in some places?", A: "Summer", B: "Winter", C: "Spring", D: "Autumn", jawapan: "B" }
    ],
    sains: [
      { soalan: "Apakah kitaran hidup katak selepas telur?", A: "Berudu", B: "Katak muda", C: "Katak dewasa", D: "Pupa", jawapan: "A" },
      { soalan: "Manakah bahan yang boleh menyerap air?", A: "Kain tuala", B: "Duit syiling", C: "Sudu besi", D: "Guli kaca", jawapan: "A" },
      { soalan: "Haiwan herbivor memakan apa?", A: "Daging sahaja", B: "Tumbuhan sahaja", C: "Daging dan tumbuhan", D: "Batu", jawapan: "B" },
      { soalan: "Bumi berputar pada paksinya menyebabkan berlakunya:", A: "Siang dan malam", B: "Musim salji", C: "Gempa bumi", D: "Letusan gunung berapi", jawapan: "A" },
      { soalan: "Apakah wujudnya ais apabila dipanaskan?", A: "Pepejal", B: "Cecair (air)", C: "Gas", D: "Wap kering", jawapan: "B" },
      { soalan: "Manakah sumber cahaya semula jadi pada waktu malam?", A: "Lampu jalan", B: "Bulan (pantulan matahari)", C: "Bintang", D: "Lilin", jawapan: "B" },
      { soalan: "Apakah organ deria bagi rasa?", A: "Lidah", B: "Hidung", C: "Kulit", D: "Mata", jawapan: "A" },
      { soalan: "Haiwan yang tinggal di darat dan di air disebut sebagai:", A: "Amfibia", B: "Mamalia", C: "Reptilia", D: "Burung", jawapan: "A" },
      { soalan: "Apakah bahan yang tidak membenarkan air melaluinya?", A: "Kertas tisu", B: "Payung plastik", C: "Kain kapas", D: "Span", jawapan: "B" },
      { soalan: "Magnet mempunyai berapa kutub?", A: "1", B: "2", C: "3", D: "4", jawapan: "B" }
    ]
  },
  darjah3: {
    matematik: [
      { soalan: "Berapakah hasil bahagi 81 ÷ 9?", A: "7", B: "8", C: "9", D: "10", jawapan: "C" },
      { soalan: "Tulis dalam angka: 'Empat ribu dua puluh lima'", A: "4025", B: "4205", C: "4250", D: "4005", jawapan: "A" },
      { soalan: "Tukarkan 3 kg kepada gram:", A: "30 g", B: "300 g", C: "3000 g", D: "30000 g", jawapan: "C" },
      { soalan: "Berapakah pecahan setara bagi 1/2?", A: "1/4", B: "2/4", C: "3/5", D: "1/3", jawapan: "B" },
      { soalan: "Cari perimeter bagi sebuah segi empat sama dengan sisi 5 cm:", A: "10 cm", B: "15 cm", C: "20 cm", D: "25 cm", jawapan: "C" },
      { soalan: "Berapakah jumlah jam dalam 2 hari?", A: "24 jam", B: "36 jam", C: "48 jam", D: "60 jam", jawapan: "C" },
      { soalan: "RM50.00 - RM18.20 = ?", A: "RM31.80", B: "RM32.80", C: "RM31.20", D: "RM30.80", jawapan: "A" },
      { soalan: "Apakah hasil tambah 456 + 239?", A: "685", B: "695", C: "705", D: "675", jawapan: "B" },
      { soalan: "Berapakah bilangan minit dalam 2 jam?", A: "60 minit", B: "90 minit", C: "120 minit", D: "180 minit", jawapan: "C" },
      { soalan: "Apakah bentuk 3D yang mempunyai tapak bulat dan satu bucu?", A: "Silinder", B: "Kon", C: "Sfera", D: "Piramid", jawapan: "B" }
    ],
    bahasaMelayu: [
      { soalan: "Pilih ayat yang mengandungi kata ganti nama diri pertama:", A: "Dia seorang doktor.", B: "Kami pergi ke perpustakaan.", C: "Awak hendak ke mana?", D: "Mereka sedang bermain bola.", jawapan: "B" },
      { soalan: "Apakah imbuhan akhiran yang betul bagi 'makan' untuk menjadi kata nama?", A: "-an (makanan)", B: "-kan", C: "-i", D: "-nya", jawapan: "A" },
      { soalan: "Pilih peribahasa yang bermaksud 'sangat rajin':", A: "Bagai duri dalam daging", B: "Bertatu di tangan", C: "Seperti kilat", D: "Anak emas", jawapan: "B" },
      { soalan: "Ayat perintah silaan menggunakan perkataan:", A: "Jangan", B: "Sila", C: "Usah", D: "Tolong", jawapan: "B" },
      { soalan: "Apakah sinonim bagi perkataan 'pintar'?", A: "Bodoh", B: "Cerdik", C: "Malas", D: "Lembab", jawapan: "B" },
      { soalan: "Kawasan hutan lindung di Sarawak yang terkenal ialah:", A: "Taman Negara Mulu", B: "KLCC", C: "Putrajaya", D: "Menara Kuala Lumpur", jawapan: "A" },
      { soalan: "Pilih kata hubung yang betul: 'Amin ______ Ali bersahabat baik.'", A: "atau", B: "dan", C: "tetapi", D: "kerana", jawapan: "B" },
      { soalan: "Apakah penjodoh bilangan untuk sekumpulan kunci?", A: "Gugus", B: "Ikat", C: "Kawan", D: "Bentuk", jawapan: "A" },
      { soalan: "Pilih ejaan yang tepat bagi jawatan polis berpangkat tinggi:", A: "Inspektor", B: "Insekta", C: "Inspector", D: "Infpektor", jawapan: "A" },
      { soalan: "Apakah tanda baca yang digunakan di akhir ayat tanya?", A: "Tanda titik (.)", B: "Tanda tanya (?)", C: "Tanda seru (!)", D: "Tanda sempang (-)", jawapan: "B" }
    ],
    english: [
      { soalan: "What is the comparative form of 'tall'?", A: "Taller", B: "Tallest", C: "More tall", D: "Most tall", jawapan: "A" },
      { soalan: "Choose the correct spelling:", A: "Neccesary", B: "Necessary", C: "Necessary", D: "Neesary", jawapan: "B" },
      { soalan: "Which word is a verb?", A: "Running", B: "Beautiful", C: "Table", D: "Quickly", jawapan: "A" },
      { soalan: "What is the capital of Malaysia?", A: "Kuala Lumpur", B: "Penang", C: "Malacca", D: "Johor Bahru", jawapan: "A" },
      { soalan: "Complete the sentence: 'They ____ playing football yesterday.'", A: "was", B: "were", C: "is", D: "are", jawapan: "B" },
      { soalan: "How many seconds are in one minute?", A: "30", B: "60", C: "100", D: "3600", jawapan: "B" },
      { soalan: "What do we use to cut paper?", A: "Scissors", B: "Hammer", C: "Screwdriver", D: "Pliers", jawapan: "A" },
      { soalan: "Which animal is known as the 'King of the Jungle'?", A: "Elephant", B: "Lion", C: "Tiger", D: "Giraffe", jawapan: "B" },
      { soalan: "Opposite of 'Fast' is:", A: "Quick", B: "Slow", C: "Rapid", D: "Speedy", jawapan: "B" },
      { soalan: "Which month comes right after March?", A: "February", B: "April", C: "May", D: "January", jawapan: "B" }
    ],
    sains: [
      { soalan: "Apakah gigi yang berfungsi untuk memotong makanan?", A: "Gigi kacip", B: "Gigi taring", C: "Gigi geraham", D: "Gigi palsu", jawapan: "A" },
      { soalan: "Apakah sumber tenaga utama bagi panel solar?", A: "Angin", B: "Cahaya matahari", C: "Air", D: "Arang batu", jawapan: "B" },
      { soalan: "Manakah organ perkumuhan manusia yang menghasilkan air kencing?", A: "Peparu", B: "Ginjal", C: "Kulit", D: "Hati", jawapan: "B" },
      { soalan: "Apakah sifat kimia bahan berasid apabila diuji dengan kertas litmus biru?", A: "Menukar kepada merah", B: "Menukar kepada biru", C: "Tidak bertukar warna", D: "Menjadi hijau", jawapan: "A" },
      { soalan: "Planet manakah yang paling dekat dengan Matahari?", A:arikh: "Bumi", B: "Marikh", C: "Utarid", D: "Zuhrah", jawapan: "C" },
      { soalan: "Apakah nama proses pertukaran air cecair kepada wap air?", A: "Pelbururan", B: "Penyejatan", C: "Kondensasi", D: "Pemejalwapan", jawapan: "B" },
      { soalan: "Apakah fungsi utama bulu pada burung?", A: "Melindungi diri dari sejuk dan membantu terbang", B: "Untuk mencari makanan", C: "Untuk berjalan", D: "Untuk bernafas", jawapan: "A" },
      { soalan: "Berapakah bilangan gigi susu kanak-kanak?", A: "20", B: "32", C: "28", D: "24", jawapan: "A" },
      { soalan: "Manakah bukan sumber tenaga boleh baharu?", A: "Solar", B: "Angin", C: "Petroleum", D: "Hidroelektrik", jawapan: "C" },
      { soalan: "Apakah alat yang digunakan untuk mengukur suhu badan?", A: "Pembaris", B: "Termometer", C: "Jam randik", D: "Pita ukur", jawapan: "B" }
    ]
  },
  darjah4: {
    matematik: [
      { soalan: "Berapakah hasil tambah 45,210 + 12,345?", A: "57,555", B: "58,555", C: "57,445", D: "56,555", jawapan: "A" },
      { soalan: "Bundarkan 48,721 kepada ratus terdekat:", A: "48,700", B: "48,800", C: "49,000", D: "48,720", jawapan: "A" },
      { soalan: "Tukarkan 3/4 kepada peratus:", A: "25%", B: "50%", C: "75%", D: "100%", jawapan: "C" },
      { soalan: "Cari luas sebuah padang segi empat tepat berukuran 10m panjang dan 6m lebar:", A: "16 m²", B: "32 m²", C: "60 m²", D: "60 m", jawapan: "C" },
      { soalan: "RM124.50 × 4 = ?", A: "RM498.00", B: "RM488.00", C: "RM508.00", D: "RM478.00", jawapan: "A" }
    ],
    bahasaMelayu: [
      { soalan: "Pilih penjodoh bilangan yang betul untuk 'sehelai':", A: "Kertas / Baju", B: "Kereta", C: "Rumah", D: "Pisang", jawapan: "A" },
      { soalan: "Apakah maksud peribahasa 'seperti anjing dengan kucing'?", A: "Sentiasa bergaduh", B: "Berkasih sayang", C: "Sangat kaya", D: "Bekerjasama", jawapan: "A" },
      { soalan: "Kata sendi nama 'dari' digunakan untuk:", A: "Tempat, masa, dan sumber", B: "Orang dan haiwan sahaja", C: "Waktu dan tempat spesifik", D: "Arah tujuan", jawapan: "A" }
    ],
    english: [
      { soalan: "What is the superlative form of 'fast'?", A: "Faster", B: "Fastest", C: "Most fast", D: "More fast", jawapan: "B" },
      { soalan: "Choose the correct sentence:", A: "He goes to school every day.", B: "He go to school every day.", C: "He going to school.", D: "He gone to school.", jawapan: "A" }
    ],
    sains: [
      { soalan: "Apakah organ pernafasan bagi ikan?", A: "Paru-paru", B: "Insang", C: " Spirakel", D: "Kulit lembab", jawapan: "B" },
      { soalan: "Apakah proses perubahan wujud air daripada gas kepada cecair?", A: "Penyejatan", B: "Kondensasi", C: "Peleburan", D: "Pembekuan", jawapan: "B" }
    ]
  },
  darjah5: {
    matematik: [
      { soalan: "Berapakah nilai 3/5 daripada 200?", A: "100", B: "120", C: "140", D: "160", jawapan: "B" },
      { soalan: "Tukarkan 3.25 kg kepada gram:", A: "325 g", B: "3250 g", C: "32.5 g", D: "3025 g", jawapan: "B" },
      { soalan: "Hitung purata bagi nombor 10, 20, 30, 40 dan 50:", A: "25", B: "30", C: "35", D: "40", jawapan: "B" }
    ],
    bahasaMelayu: [
      { soalan: "Pilih ayat aktif transitif yang betul:", A: "Ali membaca buku di perpustakaan.", B: "Buku itu dibaca oleh Ali.", C: "Ali sedang tidur.", D: "Mereka berlari kencang.", jawapan: "A" },
      { soalan: "Apakah maksud simpulan bahasa 'kaki botol'?", A: "Suka mengumpul botol", B: "Peminum arak", C: "Pelari pantas", D: "Suka berjalan", jawapan: "B" }
    ],
    english: [
      { soalan: "What is the past participle of 'eat'?", A: "Ate", B: "Eaten", C: "Eating", D: "Eats", jawapan: "B" },
      { soalan: "Choose the correct spelling:", A: "Environment", B: "Enviroment", C: "Envirment", D: "Envronment", jawapan: "A" }
    ],
    sains: [
      { soalan: "Apakah sumber tenaga yang boleh diperbaharui?", A: "Arang batu", B: "Gas asli", C: "Solar (Suria)", D: "Petroleum", jawapan: "C" },
      { soalan: "Planet manakah yang mempunyai sistem gelinciran cincin paling ketara?", A: "Jupiter", B: "Saturnus (Zuhal)", C: "Mars", D: "Venus", jawapan: "B" }
    ]
  },
  darjah6: {
    matematik: [
      { soalan: "Hitung 15% daripada RM2,400:", A: "RM320", B: "RM360", C: "RM400", D: "RM420", jawapan: "B" },
      { soalan: "Apakah isipadu sebuah kubus yang mempunyai panjang sisi 4 cm?", A: "16 cm³", B: "48 cm³", C: "64 cm³", D: "32 cm³", jawapan: "C" }
    ],
    bahasaMelayu: [
      { soalan: "Pilih ayat majmuk yang betul:", A: "Ali dan Ahmad pergi ke sekolah.", B: "Ali membaca buku.", C: "Ahmad tidur di bilik.", D: "Wah, indahnya pemandangan!", jawapan: "A" }
    ],
    english: [
      { soalan: "Identify the passive voice: 'The book was read by Mary.'", A: "Passive Voice", B: "Active Voice", C: "Imperative", D: "Exclamatory", jawapan: "A" }
    ],
    sains: [
      { soalan: "Apakah mikroorganisma yang digunakan untuk membuat roti?", A: "Bakteria", B: "Fungi (Yis)", C: "Protozoa", D: "Alga", jawapan: "B" }
    ]
  }
};
