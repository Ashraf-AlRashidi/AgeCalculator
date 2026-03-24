/* Translations and localization */
let currentLang = 'ar';

const translations = {
    ar: {
        title: "حاسبة العمر الشاملة",
        subtitle: "اكتشف تفاصيل دقيقة عن عمرك",
        enter_birthdate: "أدخل تاريخ ميلادك:",
        your_age_now: "عمرك الان",
        years_label: "سنة",
        months_label: "شهر",
        days_label: "يوم",
        astro_title: "اكتشف أسرار شخصيتك",
        zodiac: "البرج الفلكي",
        chinese_zodiac: "البرج الصيني",
        birthstone: "حجر الميلاد",
        birth_flower: "زهرة الميلاد",
        moon_phase: "شكل القمر",
        total_days_title: "إجمالي الأيام",
        days_since_birth: "يوم منذ ولادتك",
        hijri_age: "العمر بالهجري",
        hijri_years_approx: "سنة هجرية تقريباً",
        birth_day_name: "يوم ولادتك",
        next_birthday: "عيد ميلادك القادم",
        day_in_coming_weeks: "يوم في الأسابيع القادمة",
        countdown_title: "باقي على عيد ميلادك",
        month: "شهر",
        day: "يوم",
        hour: "ساعة",
        minute: "دقيقة",
        second: "ثانية",
        lived_time_title: "عشت حتى الآن",
        body_stats_title: "إحصائيات جسدك التقديرية",
        heartbeats: "نبضة قلب",
        heart_avg: "بمتوسط 70 نبضة في الدقيقة",
        breaths: "نَفَس",
        breath_avg: "بمتوسط 16 نَفَس في الدقيقة",
        sleep_hours: "ساعة نوم",
        sleep_avg: "بمتوسط 8 ساعات يومياً",
        future_milestones: "محطات قادمة في حياتك",
        share_btn: "حفظ الشاشة للمشاركة",
        by: "بواسطة",
        creator_name: "المهندس أشروووف",
        milestone_completion: "إكمال",
        milestone_days: "يوم",
        milestone_seconds_half: "ثانية (نصف مليار)",
        milestone_seconds_full: "ثانية (مليار)",
        legendary: "أنت أسطورة! لقد تجاوزت جميع المحطات!",
        alert_future: "تاريخ الميلاد لا يمكن أن يكون في المستقبل!",
        watermark: "تم الحساب بواسطة المهندس أشروووف",
        unknown: "-"
    },
    en: {
        title: "Comprehensive Age Calculator",
        subtitle: "Discover precise details about your age",
        enter_birthdate: "Enter your birthdate:",
        your_age_now: "Your age now",
        years_label: "Years",
        months_label: "Months",
        days_label: "Days",
        astro_title: "Discover Your Personality Secrets",
        zodiac: "Zodiac Sign",
        chinese_zodiac: "Chinese Zodiac",
        birthstone: "Birthstone",
        birth_flower: "Birth Flower",
        moon_phase: "Moon Phase",
        total_days_title: "Total Days",
        days_since_birth: "Days since your birth",
        hijri_age: "Hijri Age",
        hijri_years_approx: "Approximate Hijri years",
        birth_day_name: "Day of Birth",
        next_birthday: "Next Birthday",
        day_in_coming_weeks: "Day in the coming weeks",
        countdown_title: "Countdown to Next Birthday",
        month: "Month",
        day: "Day",
        hour: "Hour",
        minute: "Minute",
        second: "Second",
        lived_time_title: "Time Lived Up To Now",
        body_stats_title: "Estimated Body Stats",
        heartbeats: "Heartbeats",
        heart_avg: "Average of 70 BPM",
        breaths: "Breaths",
        breath_avg: "Average of 16 BPM",
        sleep_hours: "Hours of Sleep",
        sleep_avg: "Average of 8 hours/day",
        future_milestones: "Upcoming Milestones",
        share_btn: "Save Screenshot to Share",
        by: "Created by",
        creator_name: "Eng. Ashrooof",
        milestone_completion: "Completing",
        milestone_days: "Days",
        milestone_seconds_half: "Seconds (Half a Billion)",
        milestone_seconds_full: "Seconds (One Billion)",
        legendary: "You're a legend! You've passed all milestones!",
        alert_future: "Birthdate cannot be in the future!",
        watermark: "Calculated by Eng. Ashrooof",
        unknown: "-"
    }
};

const localizedData = {
    ar: {
        days: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
        generations: {
            alpha: 'الجيل ألفا',
            genZ: 'الجيل زي (Gen Z)',
            millennials: 'جيل الألفية (Millennials)',
            genX: 'الجيل إكس (Gen X)',
            boomers: 'طفرة المواليد (Boomers)',
            silent: 'الجيل الصامت'
        },
        moonPhases: [
            { name: 'محاق', icon: '🌑' },
            { name: 'هلال متزايد', icon: '🌒' },
            { name: 'تربيع أول', icon: '🌓' },
            { name: 'أحدب متزايد', icon: '🌔' },
            { name: 'بدر', icon: '🌕' },
            { name: 'أحدب متناقص', icon: '🌖' },
            { name: 'تربيع أخير', icon: '🌗' },
            { name: 'هلال متناقص', icon: '🌘' }
        ],
        zodiacs: [
            { sign: 'الجدي', icon: '♑', startMonth: 1, startDay: 1, endMonth: 1, endDay: 19 },
            { sign: 'الدلو', icon: '♒', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
            { sign: 'الحوت', icon: '♓', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
            { sign: 'الحمل', icon: '♈', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
            { sign: 'الثور', icon: '♉', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
            { sign: 'الجوزاء', icon: '♊', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
            { sign: 'السرطان', icon: '♋', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
            { sign: 'الأسد', icon: '♌', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
            { sign: 'العذراء', icon: '♍', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
            { sign: 'الميزان', icon: '♎', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
            { sign: 'العقرب', icon: '♏', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
            { sign: 'القوس', icon: '♐', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
            { sign: 'الجدي', icon: '♑', startMonth: 12, startDay: 22, endMonth: 12, endDay: 31 }
        ],
        chinese: [
            { sign: 'القرد', icon: '🐒' }, { sign: 'الديك', icon: '🐓' },
            { sign: 'الكلب', icon: '🐕' }, { sign: 'الخنزير', icon: '🐖' },
            { sign: 'الفأر', icon: '🐀' }, { sign: 'الثور', icon: '🐂' },
            { sign: 'النمر', icon: '🐅' }, { sign: 'الأرنب', icon: '🐇' },
            { sign: 'التنين', icon: '🐉' }, { sign: 'الثعبان', icon: '🐍' },
            { sign: 'الحصان', icon: '🐎' }, { sign: 'الخروف', icon: '🐑' }
        ],
        birthstones: [
            { month: 1, stone: 'العقيق (Garnet)', flower: 'القرنفل (Carnation)' },
            { month: 2, stone: 'الجمشت (Amethyst)', flower: 'البنفسج (Violet)' },
            { month: 3, stone: 'الأكوامارين (Aquamarine)', flower: 'النرجس (Daffodil)' },
            { month: 4, stone: 'الماس (Diamond)', flower: 'البسلة الحلوة (Sweet Pea)' },
            { month: 5, stone: 'الزمرد (Emerald)', flower: 'زنبق الوادي (Lily of the Valley)' },
            { month: 6, stone: 'اللؤلؤ (Pearl)', flower: 'الورد (Rose)' },
            { month: 7, stone: 'الياقوت (Ruby)', flower: 'العايق (Larkspur)' },
            { month: 8, stone: 'الزبرجد (Peridot)', flower: 'الجلاديولس (Gladiolus)' },
            { month: 9, stone: 'الياقوت الأزرق (Sapphire)', flower: 'أستر (Aster)' },
            { month: 10, stone: 'الأوبال (Opal)', flower: 'الآذريون (Marigold)' },
            { month: 11, stone: 'التوباز (Topaz)', flower: 'الأقحوان (Chrysanthemum)' },
            { month: 12, stone: 'الفيروز (Turquoise)', flower: 'النرجس الورقي (Narcissus)' }
        ],
        localeOpt: 'ar-EG'
    },
    en: {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        generations: {
            alpha: 'Generation Alpha',
            genZ: 'Gen Z',
            millennials: 'Millennials',
            genX: 'Gen X',
            boomers: 'Boomers',
            silent: 'Silent Generation'
        },
        moonPhases: [
            { name: 'New Moon', icon: '🌑' },
            { name: 'Waxing Crescent', icon: '🌒' },
            { name: 'First Quarter', icon: '🌓' },
            { name: 'Waxing Gibbous', icon: '🌔' },
            { name: 'Full Moon', icon: '🌕' },
            { name: 'Waning Gibbous', icon: '🌖' },
            { name: 'Last Quarter', icon: '🌗' },
            { name: 'Waning Crescent', icon: '🌘' }
        ],
        zodiacs: [
            { sign: 'Capricorn', icon: '♑', startMonth: 1, startDay: 1, endMonth: 1, endDay: 19 },
            { sign: 'Aquarius', icon: '♒', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
            { sign: 'Pisces', icon: '♓', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
            { sign: 'Aries', icon: '♈', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
            { sign: 'Taurus', icon: '♉', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
            { sign: 'Gemini', icon: '♊', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
            { sign: 'Cancer', icon: '♋', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
            { sign: 'Leo', icon: '♌', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
            { sign: 'Virgo', icon: '♍', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
            { sign: 'Libra', icon: '♎', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
            { sign: 'Scorpio', icon: '♏', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
            { sign: 'Sagittarius', icon: '♐', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
            { sign: 'Capricorn', icon: '♑', startMonth: 12, startDay: 22, endMonth: 12, endDay: 31 }
        ],
        chinese: [
            { sign: 'Monkey', icon: '🐒' }, { sign: 'Rooster', icon: '🐓' },
            { sign: 'Dog', icon: '🐕' }, { sign: 'Pig', icon: '🐖' },
            { sign: 'Rat', icon: '🐀' }, { sign: 'Ox', icon: '🐂' },
            { sign: 'Tiger', icon: '🐅' }, { sign: 'Rabbit', icon: '🐇' },
            { sign: 'Dragon', icon: '🐉' }, { sign: 'Snake', icon: '🐍' },
            { sign: 'Horse', icon: '🐎' }, { sign: 'Goat', icon: '🐑' }
        ],
        birthstones: [
            { month: 1, stone: 'Garnet', flower: 'Carnation' },
            { month: 2, stone: 'Amethyst', flower: 'Violet' },
            { month: 3, stone: 'Aquamarine', flower: 'Daffodil' },
            { month: 4, stone: 'Diamond', flower: 'Sweet Pea' },
            { month: 5, stone: 'Emerald', flower: 'Lily of the Valley' },
            { month: 6, stone: 'Pearl', flower: 'Rose' },
            { month: 7, stone: 'Ruby', flower: 'Larkspur' },
            { month: 8, stone: 'Peridot', flower: 'Gladiolus' },
            { month: 9, stone: 'Sapphire', flower: 'Aster' },
            { month: 10, stone: 'Opal', flower: 'Marigold' },
            { month: 11, stone: 'Topaz', flower: 'Chrysanthemum' },
            { month: 12, stone: 'Turquoise', flower: 'Narcissus' }
        ],
        localeOpt: 'en-US'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const birthdateInput = document.getElementById('birthdate');
    const resultsSection = document.getElementById('results');

    // Display elements
    const resYears = document.getElementById('res-years');
    const resMonths = document.getElementById('res-months');
    const resDays = document.getElementById('res-days');
    const resTotalDays = document.getElementById('res-total-days');
    const resHijriAge = document.getElementById('res-hijri-age');
    const resBirthDayName = document.getElementById('res-birth-day-name');
    const resNextBirthdayDay = document.getElementById('res-next-birthday-day');
    
    // Countdown elements
    const cdMonths = document.getElementById('cd-months');
    const cdDays = document.getElementById('cd-days');
    const cdHours = document.getElementById('cd-hours');
    const cdMinutes = document.getElementById('cd-minutes');
    const cdSeconds = document.getElementById('cd-seconds');

    // Lived time elements
    const liveHours = document.getElementById('live-hours');
    const liveMinutes = document.getElementById('live-minutes');
    const liveSeconds = document.getElementById('live-seconds');

    // Astrology and new premium elements
    const resZodiac = document.getElementById('res-zodiac');
    const resZodiacIcon = document.getElementById('zodiac-icon');
    const resChineseZodiac = document.getElementById('res-chinese-zodiac');
    const resChineseIcon = document.getElementById('chinese-icon');
    const resBirthstone = document.getElementById('res-birthstone');
    const resFlower = document.getElementById('res-flower');
    const milestonesContainer = document.getElementById('milestones-container');
    const btnShare = document.getElementById('btn-share');
    
    // Ultimate Premium Elements
    const resGeneration = document.getElementById('res-generation');
    const resMoon = document.getElementById('res-moon');
    const statHearts = document.getElementById('stat-hearts');
    const statBreaths = document.getElementById('stat-breaths');
    const statSleep = document.getElementById('stat-sleep');

    // Theme and Lang Switchers
    const themeBtns = document.querySelectorAll('.theme-btn:not(#lang-btn)');
    const langBtn = document.getElementById('lang-btn');

    let updateInterval;
    let currentSavedBirthdate = null;

    // Theme Switcher Logic
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            themeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.body.setAttribute('data-theme', btn.dataset.theme);
        });
    });

    // Language Toggle
    function updateLanguage() {
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        
        // Update static texts
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });

        // Update font families
        if (currentLang === 'en') {
            document.body.style.fontFamily = "'Tajawal', 'Cairo', sans-serif";
            langBtn.textContent = 'عربي';
        } else {
            document.body.style.fontFamily = "'Cairo', 'Tajawal', sans-serif";
            langBtn.textContent = 'EN';
        }

        // Re-calculate if a date is set
        if (currentSavedBirthdate) {
            calculatePremiumData(currentSavedBirthdate);
            calculateStaticData(currentSavedBirthdate);
            updateRealtimeData(currentSavedBirthdate);
        }
    }

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        updateLanguage();
    });

    // Set max date to today
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    birthdateInput.setAttribute('max', todayString);

    birthdateInput.addEventListener('change', (e) => {
        if (!e.target.value) {
            resultsSection.classList.add('hidden');
            clearInterval(updateInterval);
            currentSavedBirthdate = null;
            return;
        }

        const birthDate = new Date(e.target.value);
        if (birthDate > new Date()) {
            alert(translations[currentLang].alert_future);
            return;
        }

        currentSavedBirthdate = birthDate;
        resultsSection.classList.remove('hidden');
        
        // Check for Confetti (if today is birthday)
        const isBirthdayToday = checkBirthday(birthDate);
        if (isBirthdayToday) triggerConfetti();

        // Initial static calculations
        calculatePremiumData(birthDate);
        calculateStaticData(birthDate);

        // Start real-time updates
        if (updateInterval) clearInterval(updateInterval);
        
        // Initial call for realtime data
        updateRealtimeData(birthDate);
        updateInterval = setInterval(() => {
            updateRealtimeData(birthDate);
        }, 1000);
    });

    function calculateStaticData(birthDate) {
        const now = new Date();

        // Exact Age (Years, Months, Days)
        let years = now.getFullYear() - birthDate.getFullYear();
        let months = now.getMonth() - birthDate.getMonth();
        let days = now.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            days += previousMonth;
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        // Animate numbers
        animateValue(resYears, 0, years, 1000);
        animateValue(resMonths, 0, months, 1000);
        animateValue(resDays, 0, days, 1000);

        // Total Days
        const timeDiff = now.getTime() - birthDate.getTime();
        const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));
        animateValue(resTotalDays, 0, totalDays, 1500);

        // Hijri Age
        const hijriAge = Math.floor(totalDays / 354.367);
        animateValue(resHijriAge, 0, hijriAge, 1500);

        // Birth Day Name
        resBirthDayName.textContent = localizedData[currentLang].days[birthDate.getDay()];

        // Next Birthday Day Name
        let nextBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (now > nextBirthday) {
            nextBirthday.setFullYear(now.getFullYear() + 1);
        }
        resNextBirthdayDay.textContent = localizedData[currentLang].days[nextBirthday.getDay()];
    }

    function updateRealtimeData(birthDate) {
        const now = new Date();

        // Time Lived Realtime
        const diffMs = now.getTime() - birthDate.getTime();
        const diffSecs = Math.floor(diffMs / 1000);
        const diffMins = Math.floor(diffSecs / 60);
        const diffHours = Math.floor(diffMins / 60);

        liveHours.textContent = diffHours.toLocaleString('en-US');
        liveMinutes.textContent = diffMins.toLocaleString('en-US');
        liveSeconds.textContent = diffSecs.toLocaleString('en-US');

        // Body Stats Realtime
        const heartbeats = Math.floor(diffMins * 70); // avg 70 bpm
        const breaths = Math.floor(diffMins * 16); // avg 16 breaths per min
        const sleepHours = Math.floor(diffHours / 3); // avg 8 hours a day (1/3 of life)

        statHearts.textContent = heartbeats.toLocaleString('en-US');
        statBreaths.textContent = breaths.toLocaleString('en-US');
        statSleep.textContent = sleepHours.toLocaleString('en-US');

        // Countdown to Next Birthday
        let nextBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        
        if (now.getTime() > nextBirthday.getTime() && new Date(now.toDateString()).getTime() !== new Date(nextBirthday.toDateString()).getTime()) {
            nextBirthday.setFullYear(now.getFullYear() + 1);
        }

        const cdDiff = nextBirthday.getTime() - now.getTime();
        
        if (cdDiff <= 0 && new Date(now.toDateString()).getTime() === new Date(nextBirthday.toDateString()).getTime()) {
            // It's their birthday!
            cdMonths.textContent = 0;
            cdDays.textContent = 0;
            cdHours.textContent = 0;
            cdMinutes.textContent = 0;
            cdSeconds.textContent = 0;
            return;
        }

        let cdS = Math.floor(cdDiff / 1000);
        let cdM = Math.floor(cdS / 60);
        let cdH = Math.floor(cdM / 60);
        let cdD = Math.floor(cdH / 24);

        cdH %= 24;
        cdM %= 60;
        cdS %= 60;

        let cdMo = Math.floor(cdD / 30.44);
        cdD = Math.floor(cdD % 30.44);

        cdMonths.textContent = cdMo;
        cdDays.textContent = cdD;
        cdHours.textContent = cdH;
        cdMinutes.textContent = cdM;
        cdSeconds.textContent = cdS;
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString('en-US');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function checkBirthday(birthDate) {
        const now = new Date();
        return now.getDate() === birthDate.getDate() && now.getMonth() === birthDate.getMonth();
    }

    function triggerConfetti() {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

    function calculatePremiumData(birthDate) {
        const month = birthDate.getMonth() + 1; // 1-12
        const day = birthDate.getDate();
        const year = birthDate.getFullYear();

        const curLocalized = localizedData[currentLang];

        // Western Zodiac
        let zodiac = curLocalized.zodiacs.find(z => (month === z.startMonth && day >= z.startDay) || (month === z.endMonth && day <= z.endDay));
        if (zodiac) {
            resZodiac.textContent = zodiac.sign;
            resZodiacIcon.textContent = zodiac.icon;
        } else {
            resZodiac.textContent = translations[currentLang].unknown;
        }

        // Chinese Zodiac
        const chineseZodiacIndex = year % 12;
        resChineseZodiac.textContent = curLocalized.chinese[chineseZodiacIndex].sign;
        resChineseIcon.textContent = curLocalized.chinese[chineseZodiacIndex].icon;

        // Birthstone & Flower
        const stoneData = curLocalized.birthstones.find(b => b.month === month);
        if (stoneData) {
            resBirthstone.textContent = stoneData.stone;
            resFlower.textContent = stoneData.flower;
        } else {
            resBirthstone.textContent = translations[currentLang].unknown;
            resFlower.textContent = translations[currentLang].unknown;
        }

        // Generation
        resGeneration.textContent = getGeneration(year);

        // Moon Phase
        const moonPhase = getMoonPhase(year, month, day);
        resMoon.textContent = moonPhase.name;
        document.getElementById('moon-icon').textContent = moonPhase.icon;

        // Milestones
        calculateMilestones(birthDate);
    }

    function getGeneration(year) {
        const gens = localizedData[currentLang].generations;
        if (year >= 2013) return gens.alpha;
        if (year >= 1997) return gens.genZ;
        if (year >= 1981) return gens.millennials;
        if (year >= 1965) return gens.genX;
        if (year >= 1946) return gens.boomers;
        return gens.silent;
    }

    function getMoonPhase(year, month, day) {
        let c = 0, e = 0, jd = 0, b = 0;
        if (month < 3) {
            year--;
            month += 12;
        }
        ++month;
        c = 365.25 * year;
        e = 30.6 * month;
        jd = c + e + day - 694039.09; 
        jd /= 29.5305882; 
        b = parseInt(jd); 
        jd -= b; 
        b = Math.round(jd * 8); 
        if (b >= 8) b = 0; 
        
        return localizedData[currentLang].moonPhases[b];
    }

    function calculateMilestones(birthDate) {
        milestonesContainer.innerHTML = ''; 
        const now = new Date();
        const timeDiff = now.getTime() - birthDate.getTime();
        const daysLived = Math.floor(timeDiff / (1000 * 3600 * 24));

        const tl = translations[currentLang];
        const milestones = [
            { threshold: 1000, type: 'days', label: tl.milestone_days },
            { threshold: 5000, type: 'days', label: tl.milestone_days },
            { threshold: 10000, type: 'days', label: tl.milestone_days },
            { threshold: 15000, type: 'days', label: tl.milestone_days },
            { threshold: 20000, type: 'days', label: tl.milestone_days },
            { threshold: 25000, type: 'days', label: tl.milestone_days },
            { threshold: 500000000, type: 'seconds', label: tl.milestone_seconds_half },
            { threshold: 1000000000, type: 'seconds', label: tl.milestone_seconds_full }
        ];

        let addedCount = 0;
        const localeOpt = localizedData[currentLang].localeOpt;
        
        milestones.forEach(m => {
            if (addedCount >= 3) return; 

            let targetDateMs;
            if (m.type === 'days') {
                if (daysLived >= m.threshold) return; 
                targetDateMs = birthDate.getTime() + (m.threshold * 24 * 3600 * 1000);
            } else if (m.type === 'seconds') {
                const secondsLived = Math.floor(timeDiff / 1000);
                if (secondsLived >= m.threshold) return; 
                targetDateMs = birthDate.getTime() + (m.threshold * 1000);
            }

            const targetDate = new Date(targetDateMs);
            const formattedDate = targetDate.toLocaleDateString(localeOpt, { year: 'numeric', month: 'long', day: 'numeric' });

            const div = document.createElement('div');
            div.className = 'milestone-item';
            div.innerHTML = `
                <span class="m-title">${tl.milestone_completion} ${m.threshold.toLocaleString('en-US')} ${m.label}</span>
                <span class="m-date">${formattedDate}</span>
            `;
            milestonesContainer.appendChild(div);
            addedCount++;
        });

        if (addedCount === 0) {
            milestonesContainer.innerHTML = `<div class="milestone-item"><span class="m-title">${tl.legendary}</span></div>`;
        }
    }

    // Share/Screenshot functionality
    btnShare.addEventListener('click', () => {
        document.querySelector('.input-section').classList.add('hide-on-share');
        btnShare.classList.add('hide-on-share');

        const container = document.querySelector('.container');
        
        const watermark = document.createElement('div');
        watermark.innerHTML = translations[currentLang].watermark;
        watermark.style.cssText = "position:absolute; bottom:10px; left:20px; color:rgba(255,255,255,0.5); font-size:12px; pointer-events:none; z-index:100;";
        container.appendChild(watermark);

        html2canvas(container, {
            backgroundColor: currentLang === 'ar' ? '#1e1b4b' : '#f0f4ff', // Match bg roughness based roughly on mode but its ok to use generic
            scale: 2 
        }).then(canvas => {
            document.querySelector('.input-section').classList.remove('hide-on-share');
            btnShare.classList.remove('hide-on-share');
            container.removeChild(watermark);

            const prefix = currentLang === 'ar' ? 'عُمري_' : 'MyAge_';
            const link = document.createElement('a');
            link.download = `${prefix}${new Date().getTime()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    // Initialize Language
    updateLanguage();
});
