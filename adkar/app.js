/* ================================================================
   حصن المسلم — app.js
   Full Islamic Azkar Application
   ================================================================ */

'use strict';

/* ── Azkar Database ── */
const AZKAR_DB = {

  morning: [
    {
      id: 'm1',
      text: 'أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\n﴿اللهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾',
      translation: 'آية الكرسي — من قالها حين يصبح أُجير من الجن حتى يمسي',
      source: 'البخاري', target: 1, grade: 'صحيح'
    },
    {
      id: 'm2',
      text: '﴿قُلْ هُوَ اللهُ أَحَدٌ • اللهُ الصَّمَدُ • لَمْ يَلِدْ وَلَمْ يُولَدْ • وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾',
      translation: 'سورة الإخلاص — من قرأها ثلاثًا صباحًا عدلت قراءة القرآن كله',
      source: 'الترمذي', target: 3, grade: 'صحيح'
    },
    {
      id: 'm3',
      text: '﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ • مِن شَرِّ مَا خَلَقَ • وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ • وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ • وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾',
      translation: 'سورة الفلق — ثلاث مرات',
      source: 'أبو داود', target: 3, grade: 'صحيح'
    },
    {
      id: 'm4',
      text: '﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ • مَلِكِ النَّاسِ • إِلَهِ النَّاسِ • مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ • الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ • مِنَ الْجِنَّةِ وَالنَّاسِ﴾',
      translation: 'سورة الناس — ثلاث مرات',
      source: 'أبو داود', target: 3, grade: 'صحيح'
    },
    {
      id: 'm5',
      text: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      translation: 'أصبحنا وأصبح الملك لله',
      source: 'مسلم', target: 1, grade: 'صحيح'
    },
    {
      id: 'm6',
      text: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
      translation: 'سيد الاستغفار — من قالها موقنًا فمات دخل الجنة',
      source: 'البخاري', target: 1, grade: 'صحيح'
    },
    {
      id: 'm7',
      text: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
      translation: 'اللهم بك أصبحنا',
      source: 'الترمذي', target: 1, grade: 'حسن'
    },
    {
      id: 'm8',
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي',
      translation: 'اللهم إني أسألك العفو والعافية',
      source: 'أبو داود', target: 1, grade: 'صحيح'
    },
    {
      id: 'm9',
      text: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ',
      translation: 'اللهم عافني في بدني',
      source: 'أبو داود', target: 3, grade: 'صحيح'
    },
    {
      id: 'm10',
      text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
      translation: 'اللهم إني أعوذ بك من الهم والحزن',
      source: 'البخاري', target: 1, grade: 'صحيح'
    },
    {
      id: 'm11',
      text: 'بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      translation: 'من قالها ثلاثًا لم تصبه فجأة بلاء',
      source: 'أبو داود', target: 3, grade: 'صحيح'
    },
    {
      id: 'm12',
      text: 'رَضِيتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا',
      translation: 'من قالها ثلاثًا كان حقًا على الله أن يرضيه',
      source: 'أبو داود', target: 3, grade: 'صحيح'
    },
    {
      id: 'm13',
      text: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ',
      translation: 'من قالها مئة مرة غُفرت ذنوبه وإن كانت مثل زبد البحر',
      source: 'مسلم', target: 100, grade: 'صحيح'
    },
    {
      id: 'm14',
      text: 'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      translation: 'من قالها عشر مرات كانت له عِدل عشر رقاب',
      source: 'البخاري', target: 10, grade: 'صحيح'
    },
  ],

  evening: [
    {
      id: 'e1',
      text: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      translation: 'أمسينا وأمسى الملك لله',
      source: 'مسلم', target: 1, grade: 'صحيح'
    },
    {
      id: 'e2',
      text: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ',
      translation: 'اللهم بك أمسينا',
      source: 'الترمذي', target: 1, grade: 'حسن'
    },
    {
      id: 'e3',
      text: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
      translation: 'سيد الاستغفار مساءً',
      source: 'البخاري', target: 1, grade: 'صحيح'
    },
    {
      id: 'e4',
      text: 'أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
      translation: 'لم يضره شيء حتى يرتحل من منزله',
      source: 'مسلم', target: 3, grade: 'صحيح'
    },
    {
      id: 'e5',
      text: 'بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
      translation: 'من قالها ثلاثًا لم تصبه فجأة بلاء',
      source: 'أبو داود', target: 3, grade: 'صحيح'
    },
    {
      id: 'e6',
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ',
      translation: 'اللهم إني أسألك العفو والعافية',
      source: 'أبو داود', target: 1, grade: 'صحيح'
    },
    {
      id: 'e7',
      text: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ',
      translation: 'يا حي يا قيوم',
      source: 'المستدرك', target: 1, grade: 'حسن'
    },
    {
      id: 'e8',
      text: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ',
      translation: 'اللهم عالم الغيب والشهادة',
      source: 'الترمذي', target: 1, grade: 'صحيح'
    },
    {
      id: 'e9',
      text: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ',
      translation: 'من قالها مئة مرة مساءً غُفرت ذنوبه',
      source: 'مسلم', target: 100, grade: 'صحيح'
    },
  ],

  sleep: [
    {
      id: 's1',
      text: 'بِسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
      translation: 'قاله النبي ﷺ إذا أراد أن ينام',
      source: 'البخاري', target: 1, grade: 'صحيح'
    },
    {
      id: 's2',
      text: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
      translation: 'اللهم قني عذابك',
      source: 'أبو داود', target: 3, grade: 'صحيح'
    },
    {
      id: 's3',
      text: 'سُبْحَانَ اللهِ',
      translation: 'ثلاث وثلاثون مرة',
      source: 'البخاري', target: 33, grade: 'صحيح'
    },
    {
      id: 's4',
      text: 'الْحَمْدُ لِلَّهِ',
      translation: 'ثلاث وثلاثون مرة',
      source: 'البخاري', target: 33, grade: 'صحيح'
    },
    {
      id: 's5',
      text: 'اللهُ أَكْبَرُ',
      translation: 'أربع وثلاثون مرة',
      source: 'البخاري', target: 34, grade: 'صحيح'
    },
    {
      id: 's6',
      text: '﴿بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ﴾',
      translation: 'باسمك ربي وضعت جنبي',
      source: 'البخاري', target: 1, grade: 'صحيح'
    },
    {
      id: 's7',
      text: 'اللَّهُمَّ رَبَّ السَّمَاوَاتِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ',
      translation: 'اللهم رب السموات والأرض',
      source: 'البخاري', target: 1, grade: 'صحيح'
    },
  ],

  prayer: [
    {
      id: 'p1',
      text: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
      translation: 'يقال دبر كل صلاة',
      source: 'أبو داود', target: 1, grade: 'صحيح'
    },
    {
      id: 'p2',
      text: 'أَسْتَغْفِرُ اللَّهَ',
      translation: 'ثلاث مرات دبر كل صلاة',
      source: 'مسلم', target: 3, grade: 'صحيح'
    },
    {
      id: 'p3',
      text: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
      translation: 'اللهم أنت السلام',
      source: 'مسلم', target: 1, grade: 'صحيح'
    },
    {
      id: 'p4',
      text: 'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      translation: 'لا إله إلا الله وحده',
      source: 'مسلم', target: 1, grade: 'صحيح'
    },
    {
      id: 'p5',
      text: 'سُبْحَانَ اللهِ',
      translation: 'ثلاث وثلاثون مرة',
      source: 'مسلم', target: 33, grade: 'صحيح'
    },
    {
      id: 'p6',
      text: 'الْحَمْدُ لِلَّهِ',
      translation: 'ثلاث وثلاثون مرة',
      source: 'مسلم', target: 33, grade: 'صحيح'
    },
    {
      id: 'p7',
      text: 'اللهُ أَكْبَرُ',
      translation: 'أربع وثلاثون مرة',
      source: 'مسلم', target: 34, grade: 'صحيح'
    },
    {
      id: 'p8',
      text: 'آيَةُ الْكُرْسِيِّ — اللهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...',
      translation: 'من قرأها دبر كل صلاة لم يمنعه من دخول الجنة إلا الموت',
      source: 'النسائي', target: 1, grade: 'صحيح'
    },
  ],

  quran_duas: [
    {
      id: 'q1',
      text: '﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ﴾',
      translation: 'ربنا آتنا في الدنيا حسنة',
      source: 'البقرة: 201', grade: 'قرآني'
    },
    {
      id: 'q2',
      text: '﴿رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا، رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا، رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ﴾',
      translation: 'ربنا لا تؤاخذنا إن نسينا',
      source: 'البقرة: 286', grade: 'قرآني'
    },
    {
      id: 'q3',
      text: '﴿رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ﴾',
      translation: 'ربنا لا تزغ قلوبنا',
      source: 'آل عمران: 8', grade: 'قرآني'
    },
    {
      id: 'q4',
      text: '﴿رَبِّ اشْرَحْ لِي صَدْرِي • وَيَسِّرْ لِي أَمْرِي • وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي • يَفْقَهُوا قَوْلِي﴾',
      translation: 'رب اشرح لي صدري — دعاء موسى عليه السلام',
      source: 'طه: 25-28', grade: 'قرآني'
    },
    {
      id: 'q5',
      text: '﴿رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا﴾',
      translation: 'ربنا هب لنا من أزواجنا وذرياتنا قرة أعين',
      source: 'الفرقان: 74', grade: 'قرآني'
    },
    {
      id: 'q6',
      text: '﴿رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَصْلِحْ لِي فِي ذُرِّيَّتِي إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ﴾',
      translation: 'رب أوزعني أن أشكر نعمتك',
      source: 'الأحقاف: 15', grade: 'قرآني'
    },
  ],

  prophetic_duas: [
    {
      id: 'pd1',
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى',
      translation: 'اللهم إني أسألك الهدى والتقى',
      source: 'مسلم', grade: 'صحيح'
    },
    {
      id: 'pd2',
      text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُ إِلَى حُبِّكَ',
      translation: 'اللهم إني أسألك حبك',
      source: 'الترمذي', grade: 'حسن'
    },
    {
      id: 'pd3',
      text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ وَالْقِلَّةِ وَالذِّلَّةِ، وَأَعُوذُ بِكَ مِنْ أَنْ أَظْلِمَ أَوْ أُظْلَمَ',
      translation: 'اللهم إني أعوذ بك من الفقر والقلة',
      source: 'أبو داود', grade: 'صحيح'
    },
    {
      id: 'pd4',
      text: 'اللَّهُمَّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي، وَإِسْرَافِي فِي أَمْرِي، وَمَا أَنتَ أَعْلَمُ بِهِ مِنِّي',
      translation: 'اللهم اغفر لي خطيئتي وجهلي',
      source: 'البخاري', grade: 'صحيح'
    },
    {
      id: 'pd5',
      text: 'اللَّهُمَّ أَصْلِحْ لِي دِينِيَ الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي، وَاجْعَلِ الْحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ، وَاجْعَلِ الْمَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ',
      translation: 'اللهم أصلح لي ديني ودنياي وآخرتي',
      source: 'مسلم', grade: 'صحيح'
    },
  ]
};

const DAILY_QUOTES = [
  { text: 'الصَّلَاةُ عِمَادُ الدِّينِ، مَنْ أَقَامَهَا فَقَدْ أَقَامَ الدِّينَ، وَمَنْ تَرَكَهَا فَقَدْ هَدَمَ الدِّينَ', source: 'حديث شريف' },
  { text: 'مَنْ أَحَبَّ أَنْ يَنْظُرَ إِلَى عَبْدٍ أَكْرَمَهُ اللهُ فَلْيَنْظُرْ إِلَى كَثِيرِ الذِّكْرِ لِلَّهِ', source: 'الحسن البصري' },
  { text: 'إِنَّ قُلُوبَكُمْ تَصْدَأُ كَمَا يَصْدَأُ الْحَدِيدُ، قِيلَ: وَمَا جِلَاؤُهَا؟ قَالَ: تِلَاوَةُ الْقُرْآنِ وَذِكْرُ الْمَوْتِ', source: 'البيهقي' },
  { text: 'مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لَا يَذْكُرُهُ مَثَلُ الْحَيِّ وَالْمَيِّتِ', source: 'البخاري' },
  { text: 'أَلَا بِذِكْرِ اللهِ تَطْمَئِنُّ الْقُلُوبُ', source: 'الرعد: 28' },
  { text: 'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ', source: 'البقرة: 152' },
  { text: 'وَالذَّاكِرِينَ اللهَ كَثِيرًا وَالذَّاكِرَاتِ أَعَدَّ اللهُ لَهُم مَّغْفِرَةً وَأَجْرًا عَظِيمًا', source: 'الأحزاب: 35' },
];

const TASBEEH_TYPES = [
  { id: 't1', text: 'سُبْحَانَ اللَّهِ', label: 'سبحان الله', target: 33 },
  { id: 't2', text: 'الْحَمْدُ لِلَّهِ', label: 'الحمد لله', target: 33 },
  { id: 't3', text: 'اللَّهُ أَكْبَرُ', label: 'الله أكبر', target: 34 },
  { id: 't4', text: 'لَا إِلَهَ إِلَّا اللَّهُ', label: 'لا إله إلا الله', target: 100 },
  { id: 't5', text: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ ﷺ', label: 'الصلاة على النبي', target: 10 },
  { id: 't6', text: 'أَسْتَغْفِرُ اللَّهَ', label: 'الاستغفار', target: 100 },
];

const MOODS = [
  { id: 'stress', icon: '😰', label: 'قلق', section: 'morning' },
  { id: 'sad', icon: '😔', label: 'حزن', section: 'prophetic_duas' },
  { id: 'grateful', icon: '🤲', label: 'شكر', section: 'quran_duas' },
  { id: 'focus', icon: '🎯', label: 'تركيز', section: 'prayer' },
  { id: 'sleep', icon: '🌙', label: 'نوم', section: 'sleep' },
  { id: 'general', icon: '☀️', label: 'عام', section: 'morning' },
];

/* ── App State ── */
const State = {
  currentScreen: 'home',
  theme: 'dark',
  counters: {},      // { azkarId: currentCount }
  completed: {},     // { azkarId: true }
  favorites: {},     // { azkarId: true }
  settings: {
    fontSize: 16,
    showTranslation: true,
    darkMode: true,
    notifications: false,
  },
  tasbeeh: {
    current: 0,
    typeIndex: 0,
    dailyTotal: 0,
    sessions: 0,
  },
  stats: {
    streak: 0,
    lastActive: null,
    totalCompleted: 0,
    morningDone: false,
    eveningDone: false,
  },
  achievements: [],
  customDuas: [],
};

/* ── Storage ── */
const Storage = {
  save(key, data) {
    try { localStorage.setItem('azkar_' + key, JSON.stringify(data)); } catch(e) {}
  },
  load(key, fallback = null) {
    try {
      const raw = localStorage.getItem('azkar_' + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch(e) { return fallback; }
  },
  saveState() {
    this.save('counters', State.counters);
    this.save('completed', State.completed);
    this.save('favorites', State.favorites);
    this.save('settings', State.settings);
    this.save('tasbeeh', State.tasbeeh);
    this.save('stats', State.stats);
    this.save('customDuas', State.customDuas);
  },
  loadState() {
    State.counters = this.load('counters', {});
    State.completed = this.load('completed', {});
    State.favorites = this.load('favorites', {});
    State.settings = { ...State.settings, ...this.load('settings', {}) };
    State.tasbeeh = { ...State.tasbeeh, ...this.load('tasbeeh', {}) };
    State.stats = { ...State.stats, ...this.load('stats', {}) };
    State.customDuas = this.load('customDuas', []);
  }
};

/* ── Utility Helpers ── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const el = (tag, cls = '', html = '') => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
};

function arabicNumerals(n) {
  return String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

function getHijriDate() {
  const today = new Date();
  // Simple Hijri approximation
  const jd = Math.floor((today - new Date(1970,0,1)) / 86400000) + 2440588;
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const ll = l - 10631 * n + 354;
  const j = Math.floor((10985 - ll) / 5316) * Math.floor((50 * ll) / 17719)
    + Math.floor(ll / 5670) * Math.floor((43 * ll) / 15238);
  const lll = ll - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50)
    - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const month = Math.floor((24 * lll) / 709);
  const day = lll - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;
  const months = ['محرم','صفر','ربيع الأول','ربيع الآخر','جمادى الأولى','جمادى الآخرة','رجب','شعبان','رمضان','شوال','ذو القعدة','ذو الحجة'];
  return `${arabicNumerals(day)} ${months[month - 1]} ${arabicNumerals(year)} هـ`;
}

function getGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'صباح الخير 🌅';
  if (h >= 12 && h < 17) return 'مساء الخير ☀️';
  if (h >= 17 && h < 20) return 'مساء النور 🌇';
  return 'تصبح على خير 🌙';
}

function getTimeSection() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'morning';
  if (h >= 12 && h < 20) return 'evening';
  return 'sleep';
}

/* ── Toast ── */
let toastTimer;
function showToast(msg) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ── Badge Popup ── */
let badgeTimer;
function showBadge(emoji, title, desc) {
  const b = $('#badge-popup');
  if (!b) return;
  b.querySelector('.badge-emoji').textContent = emoji;
  b.querySelector('.badge-title').textContent = title;
  b.querySelector('.badge-desc').textContent = desc;
  b.classList.add('show');
  clearTimeout(badgeTimer);
  badgeTimer = setTimeout(() => b.classList.remove('show'), 3500);
}

/* ── Screen Navigation ── */
function navigate(screenId) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $$('.nav-item').forEach(n => n.classList.remove('active'));
  const screen = $('#' + screenId);
  if (screen) screen.classList.add('active');
  const navBtn = $(`[data-screen="${screenId}"]`);
  if (navBtn) navBtn.classList.add('active');
  State.currentScreen = screenId;
  // Render screen content
  if (screenId === 'home') renderHome();
  if (screenId === 'tasbeeh') renderTasbeeh();
  if (screenId === 'search') initSearch();
  if (screenId === 'favorites') renderFavorites();
  window.scrollTo(0, 0);
}

/* ── Progress Calculation ── */
function getSectionProgress(section) {
  const items = AZKAR_DB[section] || [];
  if (!items.length) return { done: 0, total: 0, pct: 0 };
  let done = 0;
  items.forEach(item => {
    const cnt = State.counters[item.id] || 0;
    if (cnt >= item.target) done++;
  });
  return { done, total: items.length, pct: Math.round((done / items.length) * 100) };
}

function getOverallProgress() {
  const sections = ['morning', 'evening', 'sleep', 'prayer'];
  let totalDone = 0, totalItems = 0;
  sections.forEach(s => {
    const p = getSectionProgress(s);
    totalDone += p.done;
    totalItems += p.total;
  });
  return totalItems > 0 ? Math.round((totalDone / totalItems) * 100) : 0;
}

/* ── Home Screen ── */
function renderHome() {
  const pct = getOverallProgress();
  // Ring
  const circumference = 2 * Math.PI * 52;
  const fill = $('#ring-fill');
  if (fill) {
    fill.style.strokeDasharray = circumference;
    fill.style.strokeDashoffset = circumference - (pct / 100) * circumference;
  }
  const ringPct = $('#ring-percent');
  if (ringPct) ringPct.textContent = arabicNumerals(pct) + '%';

  // Date & greeting
  const dateEl = $('#home-date');
  if (dateEl) dateEl.textContent = getHijriDate();
  const greetEl = $('#home-greeting');
  if (greetEl) greetEl.textContent = getGreeting();

  // Stats
  const morningProg = getSectionProgress('morning');
  const eveningProg = getSectionProgress('evening');
  const tasbeehTotal = State.tasbeeh.dailyTotal || 0;

  const statMorning = $('#stat-morning');
  if (statMorning) statMorning.textContent = arabicNumerals(morningProg.done) + '/' + arabicNumerals(morningProg.total);
  const statEvening = $('#stat-evening');
  if (statEvening) statEvening.textContent = arabicNumerals(eveningProg.done) + '/' + arabicNumerals(eveningProg.total);
  const statTasbeeh = $('#stat-tasbeeh');
  if (statTasbeeh) statTasbeeh.textContent = arabicNumerals(tasbeehTotal);

  // Quick cards progress
  ['morning', 'evening', 'sleep', 'prayer'].forEach(sec => {
    const p = getSectionProgress(sec);
    const bar = $(`#qcard-${sec} .quick-card-progress-fill`);
    if (bar) bar.style.width = p.pct + '%';
    const sub = $(`#qcard-${sec} .quick-card-sub`);
    if (sub) sub.textContent = `${arabicNumerals(p.done)} من ${arabicNumerals(p.total)} ذكر`;
  });

  // Streak
  const streakEl = $('#streak-count');
  if (streakEl) streakEl.textContent = arabicNumerals(State.stats.streak) + ' يوم';

  // Daily quote
  const quoteIdx = new Date().getDate() % DAILY_QUOTES.length;
  const q = DAILY_QUOTES[quoteIdx];
  const quoteEl = $('#daily-quote-text');
  if (quoteEl) quoteEl.textContent = q.text;
  const quoteSrc = $('#daily-quote-source');
  if (quoteSrc) quoteSrc.textContent = '— ' + q.source;
}

/* ── Azkar Screen Builder ── */
function buildAzkarScreen(section, containerId) {
  const container = $('#' + containerId);
  if (!container) return;
  container.innerHTML = '';

  const items = AZKAR_DB[section] || [];

  items.forEach((item, idx) => {
    const cnt = State.counters[item.id] || 0;
    const isDone = cnt >= item.target;
    const pct = Math.min(100, (cnt / item.target) * 100);
    const isFav = State.favorites[item.id];

    const card = el('div', 'zikr-card' + (isDone ? ' completed' : ''));
    card.id = 'zikr-' + item.id;
    card.style.animationDelay = (idx * 0.05) + 's';
    card.style.animation = 'fadeZikr 0.4s ease forwards';
    card.style.opacity = '0';

    card.innerHTML = `
      <style>@keyframes fadeZikr { to {opacity:1;transform:none} from {opacity:0;transform:translateY(10px)} }</style>
      <div class="zikr-number">${arabicNumerals(idx + 1)}</div>
      <button class="zikr-bookmark ${isFav ? 'active' : ''}" data-id="${item.id}" onclick="toggleFavorite('${item.id}', this)" title="حفظ">
        ${isFav ? '🔖' : '🔖'}
      </button>
      <div class="zikr-text">${item.text.replace(/\n/g, '<br>')}</div>
      <div class="zikr-translation">${item.translation}</div>
      <div class="zikr-footer">
        <span class="zikr-source">📚 ${item.source} · ${item.grade}</span>
        <div class="zikr-counter">
          <button class="count-btn" onclick="decrementZikr('${item.id}', ${item.target}, '${section}')">−</button>
          <div class="count-display" id="cnt-${item.id}">
            ${arabicNumerals(cnt)} / ${arabicNumerals(item.target)}
          </div>
          <button class="count-btn tap-btn" onclick="incrementZikr('${item.id}', ${item.target}, '${section}')">
            <span>+</span>
            <span style="font-size:0.55rem">اضغط</span>
          </button>
        </div>
      </div>
      <div class="zikr-progress">
        <div class="zikr-progress-fill" id="prog-${item.id}" style="width:${pct}%"></div>
      </div>
      <div class="zikr-check">✓</div>
    `;
    container.appendChild(card);
  });
}

/* ── Zikr Counter Logic ── */
function incrementZikr(id, target, section) {
  const cur = State.counters[id] || 0;
  if (cur >= target) return;
  State.counters[id] = cur + 1;
  updateZikrCard(id, target, section);

  if (State.counters[id] === target) {
    const card = $('#zikr-' + id);
    if (card) {
      card.classList.add('just-completed');
      setTimeout(() => {
        card.classList.remove('just-completed');
        card.classList.add('completed');
      }, 700);
    }
    showToast('✓ أُتمَّ الذكر بحمد الله');
    checkSectionComplete(section);
  }
  Storage.saveState();
  renderHome();
}

function decrementZikr(id, target) {
  const cur = State.counters[id] || 0;
  if (cur <= 0) return;
  State.counters[id] = cur - 1;
  const card = $('#zikr-' + id);
  if (card) card.classList.remove('completed');
  updateZikrCard(id, target);
  Storage.saveState();
}

function updateZikrCard(id, target) {
  const cnt = State.counters[id] || 0;
  const cntEl = $('#cnt-' + id);
  if (cntEl) cntEl.textContent = arabicNumerals(cnt) + ' / ' + arabicNumerals(target);
  const pct = Math.min(100, (cnt / target) * 100);
  const progEl = $('#prog-' + id);
  if (progEl) progEl.style.width = pct + '%';
}

function checkSectionComplete(section) {
  const prog = getSectionProgress(section);
  if (prog.done === prog.total) {
    const names = { morning: 'أذكار الصباح', evening: 'أذكار المساء', sleep: 'أذكار النوم', prayer: 'أذكار الصلاة' };
    setTimeout(() => showBadge('🌟', 'أحسنت!', `أكملت ${names[section] || section}`), 500);
    updateStreak();
  }
}

/* ── Streak ── */
function updateStreak() {
  const today = new Date().toDateString();
  if (State.stats.lastActive === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (State.stats.lastActive === yesterday) {
    State.stats.streak = (State.stats.streak || 0) + 1;
  } else {
    State.stats.streak = 1;
  }
  State.stats.lastActive = today;
  Storage.saveState();
}

/* ── Favorites ── */
function toggleFavorite(id, btnEl) {
  State.favorites[id] = !State.favorites[id];
  if (State.favorites[id]) {
    btnEl.classList.add('active');
    showToast('💛 أُضيف إلى المفضلة');
  } else {
    btnEl.classList.remove('active');
    showToast('🗑️ حُذف من المفضلة');
  }
  Storage.saveState();
}

function renderFavorites() {
  const container = $('#favorites-list');
  if (!container) return;
  container.innerHTML = '';

  const allItems = [
    ...AZKAR_DB.morning,
    ...AZKAR_DB.evening,
    ...AZKAR_DB.sleep,
    ...AZKAR_DB.prayer,
    ...AZKAR_DB.quran_duas,
    ...AZKAR_DB.prophetic_duas,
  ];

  const favItems = allItems.filter(item => State.favorites[item.id]);

  if (!favItems.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔖</div>
        <div class="empty-state-text">لا توجد أذكار محفوظة بعد<br>اضغط على 🔖 في أي ذكر لحفظه</div>
      </div>`;
    return;
  }

  favItems.forEach(item => {
    const card = el('div', 'zikr-card mb-0');
    card.innerHTML = `
      <div class="zikr-text" style="padding:0;font-size:1.15rem">${item.text.substring(0, 120)}${item.text.length > 120 ? '...' : ''}</div>
      <div class="zikr-footer" style="margin-top:10px">
        <span class="zikr-source">📚 ${item.source}</span>
        <button class="count-btn" style="font-size:0.7rem;width:auto;padding:0 10px;border-radius:var(--radius-pill)" onclick="toggleFavorite('${item.id}', this); renderFavorites()">إزالة</button>
      </div>`;
    container.appendChild(card);
  });
}

/* ── Tasbeeh Screen ── */
function renderTasbeeh() {
  const typeContainer = $('#tasbeeh-types');
  if (!typeContainer) return;
  typeContainer.innerHTML = '';

  TASBEEH_TYPES.forEach((type, i) => {
    const btn = el('button', 'tasbeeh-type-btn' + (i === State.tasbeeh.typeIndex ? ' active' : ''), type.label);
    btn.onclick = () => selectTasbeehType(i);
    typeContainer.appendChild(btn);
  });

  updateTasbeehDisplay();
}

function selectTasbeehType(idx) {
  State.tasbeeh.typeIndex = idx;
  State.tasbeeh.current = 0;
  $$('.tasbeeh-type-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  updateTasbeehDisplay();
  Storage.saveState();
}

function updateTasbeehDisplay() {
  const type = TASBEEH_TYPES[State.tasbeeh.typeIndex];
  const textEl = $('#tasbeeh-text-display');
  if (textEl) textEl.textContent = type.text;
  const numEl = $('#tasbeeh-num');
  if (numEl) numEl.textContent = arabicNumerals(State.tasbeeh.current);
  const targetEl = $('#tasbeeh-target');
  if (targetEl) targetEl.textContent = 'من ' + arabicNumerals(type.target);

  // Arc progress
  updateTasbeehArc();

  // Stats
  const dailyEl = $('#tsb-daily');
  if (dailyEl) dailyEl.textContent = arabicNumerals(State.tasbeeh.dailyTotal || 0);
  const sessionsEl = $('#tsb-sessions');
  if (sessionsEl) sessionsEl.textContent = arabicNumerals(State.tasbeeh.sessions || 0);
  const typeEl = $('#tsb-type');
  if (typeEl) typeEl.textContent = type.label;
}

function updateTasbeehArc() {
  const svg = $('#tasbeeh-arc-svg');
  if (!svg) return;
  const type = TASBEEH_TYPES[State.tasbeeh.typeIndex];
  const pct = Math.min(1, State.tasbeeh.current / type.target);
  const r = 95;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - pct * circumference;
  const arc = svg.querySelector('.arc-fill');
  if (arc) {
    arc.style.strokeDasharray = circumference;
    arc.style.strokeDashoffset = offset;
  }
}

function tapTasbeeh() {
  const type = TASBEEH_TYPES[State.tasbeeh.typeIndex];
  State.tasbeeh.current++;
  State.tasbeeh.dailyTotal = (State.tasbeeh.dailyTotal || 0) + 1;

  if (State.tasbeeh.current === type.target) {
    State.tasbeeh.sessions = (State.tasbeeh.sessions || 0) + 1;
    showToast('🌟 أُكمل التسبيح!');
    // Haptic-like visual flash
    const btn = $('#tasbeeh-main-btn');
    if (btn) {
      btn.style.boxShadow = '0 0 60px rgba(201,168,76,0.6), inset 0 0 40px rgba(201,168,76,0.1)';
      setTimeout(() => btn.style.boxShadow = '', 600);
    }
  }

  // Add ripple
  addRipple($('#tasbeeh-main-btn'));
  updateTasbeehDisplay();
  Storage.saveState();
}

function resetTasbeeh() {
  State.tasbeeh.current = 0;
  updateTasbeehDisplay();
  Storage.saveState();
  showToast('↺ تمت إعادة التعيين');
}

function addRipple(btn) {
  if (!btn) return;
  const ripple = el('div', 'ripple');
  const size = Math.max(btn.clientWidth, btn.clientHeight);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = '50%';
  ripple.style.top = '50%';
  ripple.style.marginLeft = ripple.style.marginTop = (-size / 2) + 'px';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

/* ── Search ── */
let searchIndex = [];

function buildSearchIndex() {
  searchIndex = [];
  const sections = {
    'أذكار الصباح': AZKAR_DB.morning,
    'أذكار المساء': AZKAR_DB.evening,
    'أذكار النوم': AZKAR_DB.sleep,
    'أذكار الصلاة': AZKAR_DB.prayer,
    'أدعية قرآنية': AZKAR_DB.quran_duas,
    'أدعية نبوية': AZKAR_DB.prophetic_duas,
  };
  Object.entries(sections).forEach(([cat, items]) => {
    items.forEach(item => searchIndex.push({ ...item, category: cat }));
  });
}

function initSearch() {
  const inp = $('#search-input');
  if (!inp) return;
  inp.addEventListener('input', () => performSearch(inp.value));
}

function performSearch(query) {
  const container = $('#search-results');
  if (!container) return;
  container.innerHTML = '';
  if (!query.trim()) return;

  const q = query.trim().toLowerCase();
  const results = searchIndex.filter(item =>
    item.text.includes(q) || item.translation.toLowerCase().includes(q)
  );

  if (!results.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">لا توجد نتائج للبحث</div></div>`;
    return;
  }

  results.slice(0, 20).forEach(item => {
    const d = el('div', 'search-result-item');
    d.innerHTML = `
      <div class="result-category">${item.category}</div>
      <div class="result-text">${item.text.substring(0, 120)}...</div>
    `;
    container.appendChild(d);
  });
}

/* ── Settings ── */
function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  State.settings.darkMode = dark;
}

function applyFontSize(size) {
  document.documentElement.style.setProperty('--arabic-font-size', size + 'px');
  $$('.zikr-text').forEach(el => el.style.fontSize = size + 'px');
  State.settings.fontSize = size;
}

function toggleTranslation() {
  State.settings.showTranslation = !State.settings.showTranslation;
  document.body.classList.toggle('show-translation', State.settings.showTranslation);
  const btn = $('#translation-toggle');
  if (btn) btn.classList.toggle('on', State.settings.showTranslation);
  Storage.saveState();
}

function toggleDarkMode() {
  State.settings.darkMode = !State.settings.darkMode;
  applyTheme(State.settings.darkMode);
  const btn = $('#darkmode-toggle');
  if (btn) btn.classList.toggle('on', State.settings.darkMode);
  Storage.saveState();
}

function changeFontSize(val) {
  State.settings.fontSize = parseInt(val);
  applyFontSize(State.settings.fontSize);
  Storage.saveState();
}

/* ── Prayer Times (approximate based on latitude) ── */
function renderPrayerTimes() {
  const card = $('#prayer-times-card');
  if (!card) return;
  const now = new Date();
  const h = now.getHours();
  // Approximate fixed times (can be replaced with calculation)
  const prayers = [
    { name: 'الفجر', h: 5, m: 0 },
    { name: 'الظهر', h: 12, m: 30 },
    { name: 'العصر', h: 15, m: 30 },
    { name: 'المغرب', h: 18, m: 15 },
    { name: 'العشاء', h: 20, m: 0 },
  ];
  let nextIdx = prayers.findIndex(p => p.h > h || (p.h === h && p.m > now.getMinutes()));
  if (nextIdx === -1) nextIdx = 0;

  const grid = card.querySelector('.prayer-times-grid');
  if (!grid) return;
  grid.innerHTML = '';
  prayers.forEach((p, i) => {
    const div = el('div', 'prayer-time-item' + (i === nextIdx ? ' next' : ''));
    const timeStr = arabicNumerals(String(p.h).padStart(2,'0') + ':' + String(p.m).padStart(2,'0'));
    div.innerHTML = `<div class="prayer-name">${p.name}</div><div class="prayer-time">${timeStr}</div>`;
    grid.appendChild(div);
  });
}

/* ── Custom Duas ── */
function addCustomDua() {
  const textEl = $('#custom-dua-input');
  if (!textEl || !textEl.value.trim()) return;
  const dua = { id: 'cd_' + Date.now(), text: textEl.value.trim(), date: new Date().toISOString() };
  State.customDuas.unshift(dua);
  textEl.value = '';
  renderCustomDuas();
  Storage.saveState();
  showToast('✓ تمت إضافة الدعاء');
}

function renderCustomDuas() {
  const container = $('#custom-duas-list');
  if (!container) return;
  container.innerHTML = '';
  if (!State.customDuas.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">✍️</div><div class="empty-state-text">لم تُضف أدعية شخصية بعد</div></div>`;
    return;
  }
  State.customDuas.forEach(dua => {
    const card = el('div', 'zikr-card');
    card.innerHTML = `
      <div class="zikr-text" style="padding:0;font-size:1.2rem">${dua.text}</div>
      <div class="zikr-footer" style="margin-top:10px">
        <span class="zikr-source">دعاء شخصي</span>
        <button class="count-btn" style="font-size:0.7rem;width:auto;padding:0 12px;border-radius:var(--radius-pill)" onclick="deleteCustomDua('${dua.id}')">حذف</button>
      </div>`;
    container.appendChild(card);
  });
}

function deleteCustomDua(id) {
  State.customDuas = State.customDuas.filter(d => d.id !== id);
  renderCustomDuas();
  Storage.saveState();
  showToast('🗑️ تم الحذف');
}

/* ── Notifications ── */
async function requestNotifications() {
  if (!('Notification' in window)) return showToast('المتصفح لا يدعم الإشعارات');
  const perm = await Notification.requestPermission();
  if (perm === 'granted') {
    State.settings.notifications = true;
    showToast('✓ تم تفعيل التذكيرات');
    scheduleReminders();
  } else {
    showToast('لم يتم السماح بالإشعارات');
  }
  Storage.saveState();
}

function scheduleReminders() {
  // Morning reminder at 6 AM, Evening at 6 PM
  const now = new Date();
  const morning = new Date(now);
  morning.setHours(6, 0, 0, 0);
  if (morning <= now) morning.setDate(morning.getDate() + 1);

  setTimeout(() => {
    new Notification('🌅 أذكار الصباح', { body: 'حان وقت أذكار الصباح، لا تنسَ ذكر الله', icon: './icons/icon-192.png', dir: 'rtl' });
    setInterval(() => new Notification('🌅 أذكار الصباح', { body: 'حان وقت أذكار الصباح' }), 86400000);
  }, morning - now);
}

/* ── PWA Install ── */
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const banner = $('#install-banner');
  if (banner) banner.classList.remove('hidden');
});

function installApp() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(result => {
    if (result.outcome === 'accepted') showToast('🎉 جارٍ التثبيت...');
    deferredPrompt = null;
    const banner = $('#install-banner');
    if (banner) banner.classList.add('hidden');
  });
}

/* ── Service Worker ── */
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => console.log('[SW] Registered'))
      .catch(err => console.warn('[SW] Error:', err));
  }
}

/* ── Onboarding ── */
let onboardingStep = 0;
const ONBOARDING_STEPS = 3;

function nextOnboardingStep() {
  const steps = $$('.onboarding-step');
  const dots = $$('.onboarding-dot');
  if (onboardingStep < ONBOARDING_STEPS - 1) {
    steps[onboardingStep].classList.remove('active');
    onboardingStep++;
    steps[onboardingStep].classList.add('active');
    dots.forEach((d, i) => d.classList.toggle('active', i === onboardingStep));
  } else {
    // Finish onboarding
    const ob = $('#onboarding');
    if (ob) {
      ob.style.opacity = '0';
      setTimeout(() => ob.remove(), 500);
    }
    localStorage.setItem('azkar_onboarded', '1');
  }
}

/* ── Init ── */
function init() {
  // Load persisted state
  Storage.loadState();

  // Apply saved settings
  applyTheme(State.settings.darkMode);
  if (State.settings.showTranslation) {
    document.body.classList.add('show-translation');
  }
  // Apply saved font size
  applyFontSize(State.settings.fontSize || 16);

  // Build search index
  buildSearchIndex();

  // Render initial screens
  renderHome();
  buildAzkarScreen('morning', 'morning-list');
  buildAzkarScreen('evening', 'evening-list');
  buildAzkarScreen('sleep', 'sleep-list');
  buildAzkarScreen('prayer', 'prayer-list');

  // Render Quran / Prophetic duas
  buildDuasScreen('quran_duas', 'quran-duas-list');
  buildDuasScreen('prophetic_duas', 'prophetic-duas-list');

  // Render prayer times
  renderPrayerTimes();

  // Render custom duas
  renderCustomDuas();

  // Render favorites
  renderFavorites();

  // Update streak
  checkDailyReset();

  // Register SW
  registerSW();

  // Hide splash
  setTimeout(() => {
    const splash = $('#splash');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => splash.remove(), 500);
    }
    // Show onboarding if first time
    if (!localStorage.getItem('azkar_onboarded')) {
      const ob = $('#onboarding');
      if (ob) {
        ob.style.display = 'flex';
        ob.style.opacity = '1';
      }
    }
  }, 1800);

  // Navigate to time-appropriate section
  const section = getTimeSection();
  // Auto-recommend: highlight the relevant quick card
  setTimeout(() => highlightRecommended(section), 2200);
}

function checkDailyReset() {
  const today = new Date().toDateString();
  const lastReset = localStorage.getItem('azkar_last_reset');
  if (lastReset !== today) {
    // New day — don't reset counts (user may want to continue)
    localStorage.setItem('azkar_last_reset', today);
    State.tasbeeh.dailyTotal = 0;
    Storage.saveState();
  }
}

function highlightRecommended(section) {
  const card = $(`#qcard-${section}`);
  if (card) {
    card.style.borderColor = 'var(--gold)';
    card.style.boxShadow = '0 0 20px var(--gold-glow)';
    setTimeout(() => {
      card.style.borderColor = '';
      card.style.boxShadow = '';
    }, 2000);
  }
}

/* ── Build Duas Screen ── */
function buildDuasScreen(section, containerId) {
  const container = $('#' + containerId);
  if (!container) return;
  container.innerHTML = '';
  const items = AZKAR_DB[section] || [];
  items.forEach((item, idx) => {
    const card = el('div', 'zikr-card');
    card.style.animationDelay = (idx * 0.06) + 's';
    card.innerHTML = `
      <div class="zikr-text">${item.text.replace(/\n/g,'<br>')}</div>
      <div class="zikr-translation">${item.translation || ''}</div>
      <div class="zikr-footer">
        <span class="zikr-source">📚 ${item.source} · ${item.grade}</span>
        <button class="zikr-bookmark" onclick="toggleFavorite('${item.id}', this)">🔖</button>
      </div>`;
    container.appendChild(card);
  });
}

/* ── Expose globals for HTML onclick handlers ── */
window.navigate = navigate;
window.tapTasbeeh = tapTasbeeh;
window.resetTasbeeh = resetTasbeeh;
window.toggleFavorite = toggleFavorite;
window.incrementZikr = incrementZikr;
window.decrementZikr = decrementZikr;
window.toggleDarkMode = toggleDarkMode;
window.toggleTranslation = toggleTranslation;
window.changeFontSize = changeFontSize;
window.addCustomDua = addCustomDua;
window.deleteCustomDua = deleteCustomDua;
window.requestNotifications = requestNotifications;
window.installApp = installApp;
window.nextOnboardingStep = nextOnboardingStep;
window.buildAzkarScreen = buildAzkarScreen;

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', init);
