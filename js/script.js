// ============================================
// DATA DENGAN LOCALSTORAGE
// ============================================

function simpanSemuaData() {
    try {
        localStorage.setItem('jadwalData', JSON.stringify(jadwalData));
        localStorage.setItem('eventData', JSON.stringify(eventData));
        localStorage.setItem('capaianData', JSON.stringify(capaianData));
        localStorage.setItem('nextEventId', String(nextEventId));
        localStorage.setItem('nextJadwalId', String(nextJadwalId));
    } catch (e) {
        console.log('Gagal menyimpan data:', e);
    }
}

function muatSemuaData() {
    try {
        const savedJadwal = localStorage.getItem('jadwalData');
        const savedEvent = localStorage.getItem('eventData');
        const savedCapaian = localStorage.getItem('capaianData');
        const savedNextEventId = localStorage.getItem('nextEventId');
        const savedNextJadwalId = localStorage.getItem('nextJadwalId');

        if (savedJadwal) {
            const parsed = JSON.parse(savedJadwal);
            if (Array.isArray(parsed) && parsed.length > 0) {
                jadwalData = parsed;
            }
        }
        if (savedEvent) {
            const parsed = JSON.parse(savedEvent);
            if (Array.isArray(parsed) && parsed.length > 0) {
                eventData = parsed;
            }
        }
        if (savedCapaian) {
            const parsed = JSON.parse(savedCapaian);
            if (Array.isArray(parsed) && parsed.length > 0) {
                capaianData = parsed;
            }
        }
        if (savedNextEventId) {
            nextEventId = parseInt(savedNextEventId) || 11;
        }
        if (savedNextJadwalId) {
            nextJadwalId = parseInt(savedNextJadwalId) || 8;
        }
    } catch (e) {
        console.log('Gagal memuat data:', e);
    }
}

// ============================================
// DATA JADWAL
// ============================================
let jadwalData = [
    { id: 1, kegiatan: 'Rapat Koordinasi', waktu: '08:00 - 09:30', ruangan: 'R. Meeting 1', tempat: 'Gedung A Lantai 2', pic: 'Budi' },
    { id: 2, kegiatan: 'Workshop UI/UX', waktu: '10:00 - 12:00', ruangan: 'Lab. Komputer', tempat: 'Gedung B Lantai 3', pic: 'Siti' },
    { id: 3, kegiatan: 'Briefing Tim', waktu: '13:00 - 14:00', ruangan: 'R. Rapat 2', tempat: 'Gedung A Lantai 1', pic: 'Andi' },
    { id: 4, kegiatan: 'Presentasi Client', waktu: '14:30 - 16:00', ruangan: 'R. VIP', tempat: 'Gedung C Lantai 2', pic: 'Dewi' },
    { id: 5, kegiatan: 'Evaluasi Bulanan', waktu: '16:30 - 18:00', ruangan: 'R. Meeting 1', tempat: 'Gedung A Lantai 2', pic: 'Budi' },
    { id: 6, kegiatan: 'Pelatihan Excel', waktu: '09:00 - 11:00', ruangan: 'Lab. Komputer', tempat: 'Gedung B Lantai 3', pic: 'Siti' },
    { id: 7, kegiatan: 'Meeting Client', waktu: '13:30 - 15:00', ruangan: 'R. VIP', tempat: 'Gedung C Lantai 2', pic: 'Dewi' },
];
let nextJadwalId = 8;

// ============================================
// DATA EVENT KALENDER
// ============================================
let eventData = [
    { id: 1, tanggal: 3, nama: 'Rapat Koordinasi', waktu: '08:00 - 09:30', ruangan: 'R. Meeting 1', tempat: 'Gedung A', pic: 'Budi' },
    { id: 2, tanggal: 7, nama: 'Workshop UI/UX', waktu: '10:00 - 12:00', ruangan: 'Lab. Komputer', tempat: 'Gedung B', pic: 'Siti' },
    { id: 3, tanggal: 10, nama: 'Briefing Tim', waktu: '13:00 - 14:00', ruangan: 'R. Rapat 2', tempat: 'Gedung A', pic: 'Andi' },
    { id: 4, tanggal: 12, nama: 'Presentasi Client', waktu: '14:30 - 16:00', ruangan: 'R. VIP', tempat: 'Gedung C', pic: 'Dewi' },
    { id: 5, tanggal: 15, nama: 'Evaluasi Bulanan', waktu: '16:30 - 18:00', ruangan: 'R. Meeting 1', tempat: 'Gedung A', pic: 'Budi' },
    { id: 6, tanggal: 18, nama: 'Pelatihan Excel', waktu: '09:00 - 11:00', ruangan: 'Lab. Komputer', tempat: 'Gedung B', pic: 'Siti' },
    { id: 7, tanggal: 22, nama: 'Meeting Client', waktu: '13:30 - 15:00', ruangan: 'R. VIP', tempat: 'Gedung C', pic: 'Dewi' },
    { id: 8, tanggal: 25, nama: 'Rapat Bulanan', waktu: '10:00 - 12:00', ruangan: 'R. Meeting 1', tempat: 'Gedung A', pic: 'Budi' },
    { id: 9, tanggal: 28, nama: 'Workshop Design', waktu: '14:00 - 16:00', ruangan: 'Lab. Komputer', tempat: 'Gedung B', pic: 'Siti' },
    { id: 10, tanggal: 30, nama: 'Evaluasi Akhir', waktu: '09:00 - 11:00', ruangan: 'R. VIP', tempat: 'Gedung C', pic: 'Dewi' },
];
let nextEventId = 11;

// ============================================
// DATA CAPAIAN PENGUNJUNG
// ============================================
let capaianData = [
    { bulan: 'Jan', jumlah: 120, target: 200 },
    { bulan: 'Feb', jumlah: 150, target: 200 },
    { bulan: 'Mar', jumlah: 180, target: 200 },
    { bulan: 'Apr', jumlah: 170, target: 200 },
    { bulan: 'Mei', jumlah: 200, target: 200 },
    { bulan: 'Jun', jumlah: 220, target: 200 },
    { bulan: 'Jul', jumlah: 190, target: 200 },
    { bulan: 'Agu', jumlah: 210, target: 200 },
    { bulan: 'Sep', jumlah: 240, target: 200 },
    { bulan: 'Okt', jumlah: 260, target: 200 },
    { bulan: 'Nov', jumlah: 230, target: 200 },
    { bulan: 'Des', jumlah: 280, target: 200 },
];

// ============================================
// FUNGSI UNTUK GRAFIK
// ============================================
function getMonthlyData() {
    return {
        labels: capaianData.map(d => d.bulan),
        values: capaianData.map(d => d.jumlah)
    };
}

const yearlyData = {
    labels: ['2022', '2023', '2024', '2025', '2026'],
    values: [1800, 2100, 2450, 2800, 3100],
};

const kategoriData = {
    labels: ['Mahasiswa', 'Dosen', 'Umum', 'Instansi'],
    values: [45, 25, 20, 10],
    colors: ['#1a237e', '#3949ab', '#5c6bc0', '#9fa8da'],
};

// ============================================
// NAVIGASI
// ============================================
function navigateTo(page) {
    const link = document.querySelector(`.menu a[data-page="${page}"]`);
    if (link) link.click();
}

// ============================================
// SIDEBAR TOGGLE
// ============================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const hamburger = document.getElementById('hamburgerBtn');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (window.innerWidth <= 768) {
        sidebar.style.transform = sidebar.classList.contains('open') ? 'translateX(0)' : 'translateX(-100%)';
    }
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const hamburger = document.getElementById('hamburgerBtn');

    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');

    if (window.innerWidth <= 768) {
        sidebar.style.transform = 'translateX(-100%)';
    }
}

document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburgerBtn');

    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            closeSidebar();
        }
    }
});

window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 768) {
        sidebar.style.transform = '';
        sidebar.classList.remove('open');
        document.getElementById('overlay').classList.remove('active');
        document.getElementById('hamburgerBtn').classList.remove('active');
    } else {
        if (!sidebar.classList.contains('open')) {
            sidebar.style.transform = 'translateX(-100%)';
        }
    }
});

// ============================================
// NAVIGASI
// ============================================
const pageTitles = {
    dashboard: { title: 'Dashboard', subtitle: 'Selamat datang, Admin 👋' },
    jadwal: { title: 'Jadwal Harian', subtitle: 'Kelola semua jadwal kegiatan' },
    kalender: { title: 'Kalender Kegiatan', subtitle: 'Kelola event per tanggal' },
    capaian: { title: 'Capaian Pengunjung', subtitle: 'Kelola data capaian pengunjung' },
    laporan: { title: 'Laporan', subtitle: 'Download laporan lengkap' },
    pengaturan: { title: 'Pengaturan', subtitle: 'Konfigurasi sistem' },
};

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));

        const page = this.dataset.page;
        const targetPage = document.getElementById(`page-${page}`);
        if (targetPage) targetPage.classList.add('active');

        const titleData = pageTitles[page] || pageTitles.dashboard;
        document.getElementById('pageTitle').textContent = titleData.title;
        document.getElementById('pageSubtitle').textContent = titleData.subtitle;

        if (window.innerWidth <= 768) closeSidebar();

        if (page === 'capaian') {
            setTimeout(() => {
                initBarChartFull('monthly');
                initPieChartFull();
                renderCapaianTable();
            }, 100);
        }
        if (page === 'kalender') {
            setTimeout(() => {
                renderCalendarFull(currentMonthFull, currentYearFull);
            }, 100);
        }
        if (page === 'jadwal') renderJadwalFull();
        if (page === 'laporan') setTimeout(generateLaporan, 100);
    });
});

// ============================================
// JADWAL CRUD
// ============================================
function tambahJadwal() {
    const kegiatan = prompt('Masukkan nama kegiatan:');
    if (!kegiatan) return;
    const waktu = prompt('Masukkan waktu (contoh: 09:00 - 10:00):');
    if (!waktu) return;
    const ruangan = prompt('Masukkan ruangan:');
    if (!ruangan) return;
    const tempat = prompt('Masukkan tempat:');
    if (!tempat) return;
    const pic = prompt('Masukkan PIC:');
    if (!pic) return;

    jadwalData.push({ id: nextJadwalId++, kegiatan, waktu, ruangan, tempat, pic });

    renderJadwal();
    renderJadwalFull();
    updateStats();
    simpanSemuaData();
    alert('✅ Jadwal berhasil ditambahkan!');
}

function hapusJadwal(id) {
    if (confirm('Yakin ingin menghapus jadwal ini?')) {
        jadwalData = jadwalData.filter(j => j.id !== id);
        renderJadwal();
        renderJadwalFull();
        updateStats();
        simpanSemuaData();
        alert('✅ Jadwal berhasil dihapus!');
    }
}

function renderJadwal() {
    const tbody = document.getElementById('jadwalTableBody');
    tbody.innerHTML = jadwalData.slice(0, 5).map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${item.kegiatan}</strong></td>
            <td>${item.waktu}</td>
            <td>${item.ruangan}</td>
            <td>${item.tempat}</td>
            <td>${item.pic}</td>
        </tr>
    `).join('');
}

function renderJadwalFull() {
    const tbody = document.getElementById('jadwalFullTable');
    tbody.innerHTML = jadwalData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${item.kegiatan}</strong></td>
            <td>${item.waktu}</td>
            <td>${item.ruangan}</td>
            <td>${item.tempat}</td>
            <td>${item.pic}</td>
            <td>
                <button onclick="hapusJadwal(${item.id})" style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;">Hapus</button>
            </td>
        </tr>
    `).join('');
}

function printJadwal() {
    const now = new Date();
    document.getElementById('printDate').textContent = now.toLocaleDateString('id-ID', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
    window.print();
}

// ============================================
// DASHBOARD EVENT LIST (READ ONLY) - TAMPILKAN SEMUA
// ============================================

function renderDashboardEvents() {
    const container = document.getElementById('dashboardEventList');
    const badge = document.getElementById('eventCountBadge');
    if (!container) return;

    // Urutkan berdasarkan tanggal
    const sortedEvents = [...eventData].sort((a, b) => a.tanggal - b.tanggal);
    const totalEvents = sortedEvents.length;

    // Update badge
    if (badge) {
        badge.textContent = `${totalEvents} Kegiatan`;
    }

    if (totalEvents === 0) {
        container.innerHTML = `
            <div class="dashboard-empty-event">
                📭 Belum ada kegiatan bulan ini
            </div>
        `;
        return;
    }

    let html = '';
    sortedEvents.forEach(e => {
        html += `
            <div class="dashboard-event-item">
                <span class="event-date">${e.tanggal}</span>
                <span class="event-name">${e.nama}</span>
                <span class="event-time">🕐 ${e.waktu || '--:--'}</span>
                <span class="event-pic">👤 ${e.pic}</span>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ============================================
// KALENDER DASHBOARD (Mini)
// ============================================
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
    const grid = document.getElementById('calendarGrid');
    const monthYear = document.getElementById('monthYear');

    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    monthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date().getDate();
    const todayMonth = new Date().getMonth();
    const todayYear = new Date().getFullYear();

    let html = '';
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    dayNames.forEach(name => {
        html += `<div class="day-name">${name}</div>`;
    });

    for (let i = 0; i < firstDay; i++) {
        html += `<div class="day empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const hasEvent = eventData.some(e => e.tanggal === d);
        const isToday = (d === today && month === todayMonth && year === todayYear);
        let className = 'day';
        if (hasEvent) className += ' has-event';
        if (isToday) className += ' today';
        if (!hasEvent && !isToday) className += ' no-event';
        html += `<div class="${className}">${d}</div>`;
    }

    grid.innerHTML = html;

    // Update daftar kegiatan di beranda
    renderDashboardEvents();
}

document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11;
        currentYear--; }
    renderCalendar(currentMonth, currentYear);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0;
        currentYear++; }
    renderCalendar(currentMonth, currentYear);
});

// ============================================
// KALENDER FULL (Halaman Kalender) - CRUD
// ============================================
let currentMonthFull = new Date().getMonth();
let currentYearFull = new Date().getFullYear();

function renderCalendarFull(month, year) {
    const grid = document.getElementById('calendarGridFull');
    const monthYear = document.getElementById('monthYearFull');

    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    monthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date().getDate();
    const todayMonth = new Date().getMonth();
    const todayYear = new Date().getFullYear();

    let html = '';
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    dayNames.forEach(name => {
        html += `<div class="day-name">${name}</div>`;
    });

    for (let i = 0; i < firstDay; i++) {
        html += `<div class="day empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const hasEvent = eventData.some(e => e.tanggal === d);
        const isToday = (d === today && month === todayMonth && year === todayYear);
        let className = 'day';
        if (hasEvent) className += ' has-event';
        if (isToday) className += ' today';
        if (!hasEvent && !isToday) className += ' no-event';
        html += `<div class="${className}" onclick="showEventDetail(${d})">${d}</div>`;
    }

    grid.innerHTML = html;
    showEventDetail(null);

    // Update daftar kegiatan di beranda
    renderDashboardEvents();
}

function showEventDetail(tanggal) {
    const container = document.getElementById('eventListFull');
    const events = tanggal ? eventData.filter(e => e.tanggal === tanggal) : eventData;

    if (events.length === 0) {
        if (tanggal) {
            container.innerHTML = `
                <div style="padding:12px;background:#fff;border-radius:8px;text-align:center;color:#888;">
                    Tidak ada event pada tanggal ${tanggal}
                    <br><button class="btn-add" onclick="tambahEventTanggal(${tanggal})" style="margin-top:8px;">+ Tambah Event</button>
                </div>
            `;
        } else {
            container.innerHTML = `<p style="color:#888;">Klik tanggal untuk melihat & mengelola event</p>`;
        }
        return;
    }

    container.innerHTML = events.map(e => `
        <div style="padding:8px 12px;background:#fff;border-radius:8px;margin-bottom:6px;border-left:4px solid #1a237e;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
            <div>
                <strong>${e.nama}</strong> - ${e.waktu} (${e.ruangan}) - PIC: ${e.pic}
            </div>
            <div style="display:flex;gap:6px;">
                <button class="btn-edit" onclick="editEvent(${e.id})">✏️ Edit</button>
                <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusEventById(${e.id})">🗑️</button>
            </div>
        </div>
    `).join('');
}

// ===== TAMBAH EVENT =====
function tambahEvent() {
    document.getElementById('modalEventTitle').textContent = 'Tambah Event';
    document.getElementById('eventId').value = '';
    document.getElementById('eventTanggal').value = '';
    document.getElementById('eventNama').value = '';
    document.getElementById('eventWaktu').value = '';
    document.getElementById('eventRuangan').value = '';
    document.getElementById('eventTempat').value = '';
    document.getElementById('eventPic').value = '';
    document.getElementById('btnDeleteEvent').style.display = 'none';
    document.getElementById('eventModal').classList.add('active');
}

function tambahEventTanggal(tanggal) {
    tambahEvent();
    document.getElementById('eventTanggal').value = tanggal;
}

// ===== EDIT EVENT =====
function editEvent(id) {
    const event = eventData.find(e => e.id === id);
    if (!event) return;

    document.getElementById('modalEventTitle').textContent = 'Edit Event';
    document.getElementById('eventId').value = event.id;
    document.getElementById('eventTanggal').value = event.tanggal;
    document.getElementById('eventNama').value = event.nama;
    document.getElementById('eventWaktu').value = event.waktu;
    document.getElementById('eventRuangan').value = event.ruangan;
    document.getElementById('eventTempat').value = event.tempat;
    document.getElementById('eventPic').value = event.pic;
    document.getElementById('btnDeleteEvent').style.display = 'inline-block';
    document.getElementById('eventModal').classList.add('active');
}

// ===== SAVE EVENT =====
function saveEvent(e) {
    e.preventDefault();

    const id = document.getElementById('eventId').value;
    const tanggal = parseInt(document.getElementById('eventTanggal').value);
    const nama = document.getElementById('eventNama').value.trim();
    const waktu = document.getElementById('eventWaktu').value.trim();
    const ruangan = document.getElementById('eventRuangan').value.trim();
    const tempat = document.getElementById('eventTempat').value.trim();
    const pic = document.getElementById('eventPic').value.trim();

    if (!nama || !tanggal) {
        alert('⚠️ Nama dan Tanggal wajib diisi!');
        return;
    }

    if (id) {
        const index = eventData.findIndex(e => e.id === parseInt(id));
        if (index !== -1) {
            eventData[index] = { id: parseInt(id), tanggal, nama, waktu, ruangan, tempat, pic };
            alert('✅ Event berhasil diupdate!');
        }
    } else {
        eventData.push({ id: nextEventId++, tanggal, nama, waktu, ruangan, tempat, pic });
        alert('✅ Event berhasil ditambahkan!');
    }

    closeEventModal();
    renderCalendarFull(currentMonthFull, currentYearFull);
    renderCalendar(currentMonth, currentYear);
    simpanSemuaData();
}

// ===== HAPUS EVENT =====
function hapusEvent() {
    const id = document.getElementById('eventId').value;
    if (!id) return;
    if (confirm('Yakin ingin menghapus event ini?')) {
        eventData = eventData.filter(e => e.id !== parseInt(id));
        closeEventModal();
        renderCalendarFull(currentMonthFull, currentYearFull);
        renderCalendar(currentMonth, currentYear);
        simpanSemuaData();
        alert('✅ Event berhasil dihapus!');
    }
}

function hapusEventById(id) {
    if (confirm('Yakin ingin menghapus event ini?')) {
        eventData = eventData.filter(e => e.id !== id);
        renderCalendarFull(currentMonthFull, currentYearFull);
        renderCalendar(currentMonth, currentYear);
        simpanSemuaData();
        alert('✅ Event berhasil dihapus!');
    }
}

function closeEventModal() {
    document.getElementById('eventModal').classList.remove('active');
}

function refreshKalenderFull() {
    renderCalendarFull(currentMonthFull, currentYearFull);
    alert('🔄 Kalender berhasil direfresh!');
}

document.getElementById('prevMonthFull').addEventListener('click', () => {
    currentMonthFull--;
    if (currentMonthFull < 0) { currentMonthFull = 11;
        currentYearFull--; }
    renderCalendarFull(currentMonthFull, currentYearFull);
});

document.getElementById('nextMonthFull').addEventListener('click', () => {
    currentMonthFull++;
    if (currentMonthFull > 11) { currentMonthFull = 0;
        currentYearFull++; }
    renderCalendarFull(currentMonthFull, currentYearFull);
});

// ============================================
// CAPAIAN CRUD
// ============================================
function tambahCapaian() {
    document.getElementById('modalCapaianTitle').textContent = 'Tambah Data Capaian';
    document.getElementById('capaianIndex').value = '';
    document.getElementById('capaianBulan').value = 'Jan';
    document.getElementById('capaianJumlah').value = '';
    document.getElementById('capaianTarget').value = '200';
    document.getElementById('btnDeleteCapaian').style.display = 'none';
    document.getElementById('capaianModal').classList.add('active');
}

function editCapaian(index) {
    const data = capaianData[index];
    if (!data) return;

    document.getElementById('modalCapaianTitle').textContent = 'Edit Data Capaian';
    document.getElementById('capaianIndex').value = index;
    document.getElementById('capaianBulan').value = data.bulan;
    document.getElementById('capaianJumlah').value = data.jumlah;
    document.getElementById('capaianTarget').value = data.target;
    document.getElementById('btnDeleteCapaian').style.display = 'inline-block';
    document.getElementById('capaianModal').classList.add('active');
}

function saveCapaian(e) {
    e.preventDefault();

    const index = document.getElementById('capaianIndex').value;
    const bulan = document.getElementById('capaianBulan').value;
    const jumlah = parseInt(document.getElementById('capaianJumlah').value);
    const target = parseInt(document.getElementById('capaianTarget').value);

    if (!bulan || isNaN(jumlah) || isNaN(target)) {
        alert('⚠️ Semua field wajib diisi dengan benar!');
        return;
    }

    const existingIndex = capaianData.findIndex(d => d.bulan === bulan);
    if (index === '') {
        if (existingIndex !== -1) {
            alert(`⚠️ Data untuk bulan ${bulan} sudah ada!`);
            return;
        }
        capaianData.push({ bulan, jumlah, target });
        alert('✅ Data capaian berhasil ditambahkan!');
    } else {
        if (existingIndex !== -1 && existingIndex !== parseInt(index)) {
            alert(`⚠️ Data untuk bulan ${bulan} sudah ada!`);
            return;
        }
        capaianData[parseInt(index)] = { bulan, jumlah, target };
        alert('✅ Data capaian berhasil diupdate!');
    }

    closeCapaianModal();
    renderCapaianTable();
    updateAllCharts();
    simpanSemuaData();
}

function hapusCapaian() {
    const index = document.getElementById('capaianIndex').value;
    if (index === '') return;
    if (confirm('Yakin ingin menghapus data capaian ini?')) {
        capaianData.splice(parseInt(index), 1);
        closeCapaianModal();
        renderCapaianTable();
        updateAllCharts();
        simpanSemuaData();
        alert('✅ Data capaian berhasil dihapus!');
    }
}

function hapusCapaianByIndex(index) {
    if (confirm('Yakin ingin menghapus data capaian ini?')) {
        capaianData.splice(index, 1);
        renderCapaianTable();
        updateAllCharts();
        simpanSemuaData();
        alert('✅ Data capaian berhasil dihapus!');
    }
}

function closeCapaianModal() {
    document.getElementById('capaianModal').classList.remove('active');
}

function refreshCapaian() {
    renderCapaianTable();
    updateAllCharts();
    alert('🔄 Data capaian berhasil direfresh!');
}

function renderCapaianTable() {
    const tbody = document.getElementById('capaianTableBody');

    tbody.innerHTML = capaianData.map((item, index) => {
        const persentase = Math.round((item.jumlah / item.target) * 100);
        let status = '';
        let statusClass = '';

        if (persentase >= 100) {
            status = '✅ Tercapai';
            statusClass = 'status-success';
        } else if (persentase >= 75) {
            status = '⚠️ Mendekati';
            statusClass = 'status-warning';
        } else {
            status = '❌ Belum Tercapai';
            statusClass = 'status-danger';
        }

        return `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${item.bulan}</strong></td>
                <td>${item.jumlah}</td>
                <td>${item.target}</td>
                <td>${persentase}%</td>
                <td><span class="${statusClass}">${status}</span></td>
                <td>
                    <button class="btn-edit" onclick="editCapaian(${index})">✏️ Edit</button>
                    <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusCapaianByIndex(${index})">🗑️</button>
                </td>
            </tr>
        `;
    }).join('');
}

// ============================================
// UPDATE ALL CHARTS
// ============================================
function updateAllCharts() {
    initBarChart(currentPeriod || 'monthly');
    initBarChartFull(currentPeriodFull || 'monthly');
    initBarChartLaporan(currentLaporanPeriod || 'monthly');
}

// ============================================
// STATISTIK
// ============================================
function updateStats() {
    document.getElementById('totalKegiatan').textContent = jadwalData.length;
    const picSet = new Set(jadwalData.map(item => item.pic));
    document.getElementById('totalPic').textContent = picSet.size;
    const bulanIni = new Date().getMonth();
    const bulanNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const dataBulanIni = capaianData.find(d => d.bulan === bulanNames[bulanIni]);
    document.getElementById('totalPengunjung').textContent = dataBulanIni ? dataBulanIni.jumlah : 0;

    const now = new Date();
    document.getElementById('hariIni').textContent = now.toLocaleDateString('id-ID', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
}

// ============================================
// GRAFIK
// ============================================
let barChartInstance = null;
let currentPeriod = 'monthly';

function initBarChart(period) {
    const ctx = document.getElementById('barChart').getContext('2d');
    if (barChartInstance) barChartInstance.destroy();

    const data = period === 'monthly' ? getMonthlyData() : yearlyData;
    const label = period === 'monthly' ? 'Jumlah Pengunjung per Bulan' : 'Jumlah Pengunjung per Tahun';
    const bgColor = period === 'monthly' ? '#1a237e' : '#ffca28';

    barChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: label,
                data: data.values,
                backgroundColor: bgColor,
                borderColor: period === 'monthly' ? '#0d1445' : '#e6b800',
                borderWidth: 1,
                borderRadius: 4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'top', labels: { usePointStyle: true, pointStyle: 'circle', padding: 16 } }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#eee' } },
                x: { grid: { display: false } }
            }
        }
    });
}

let barChartFullInstance = null;
let currentPeriodFull = 'monthly';

function initBarChartFull(period) {
    const ctx = document.getElementById('barChartFull').getContext('2d');
    if (barChartFullInstance) barChartFullInstance.destroy();

    const data = period === 'monthly' ? getMonthlyData() : yearlyData;
    const label = period === 'monthly' ? 'Jumlah Pengunjung per Bulan' : 'Jumlah Pengunjung per Tahun';
    const bgColor = period === 'monthly' ? '#1a237e' : '#ffca28';

    barChartFullInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: label,
                data: data.values,
                backgroundColor: bgColor,
                borderColor: period === 'monthly' ? '#0d1445' : '#e6b800',
                borderWidth: 1,
                borderRadius: 4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'top', labels: { usePointStyle: true, pointStyle: 'circle', padding: 16 } }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#eee' } },
                x: { grid: { display: false } }
            }
        }
    });
}

let pieChartInstance = null;

function initPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    if (pieChartInstance) pieChartInstance.destroy();

    pieChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: kategoriData.labels,
            datasets: [{
                data: kategoriData.values,
                backgroundColor: kategoriData.colors,
                borderWidth: 2,
                borderColor: '#fff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { padding: 14, usePointStyle: true, pointStyle: 'circle' } }
            }
        }
    });
}

let pieChartFullInstance = null;

function initPieChartFull() {
    const ctx = document.getElementById('pieChartFull').getContext('2d');
    if (pieChartFullInstance) pieChartFullInstance.destroy();

    pieChartFullInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: kategoriData.labels,
            datasets: [{
                data: kategoriData.values,
                backgroundColor: kategoriData.colors,
                borderWidth: 2,
                borderColor: '#fff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { padding: 14, usePointStyle: true, pointStyle: 'circle' } }
            }
        }
    });
}

document.querySelectorAll('#page-dashboard .filter-btn, #page-capaian .filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const parent = this.closest('.chart-filter');
        parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const period = this.dataset.period;
        const page = this.closest('.page-content');

        if (page && page.id === 'page-dashboard') {
            currentPeriod = period;
            initBarChart(period);
        } else if (page && page.id === 'page-capaian') {
            currentPeriodFull = period;
            initBarChartFull(period);
        }
    });
});

// ============================================
// LAPORAN
// ============================================
let barChartLaporanInstance = null;
let pieChartLaporanInstance = null;
let currentLaporanPeriod = 'monthly';

function toggleDateRange() {
    const periode = document.getElementById('laporanPeriode').value;
    document.getElementById('dateRangeGroup').style.display = periode === 'custom' ? 'flex' : 'none';
}

function generateLaporan() {
    const jenis = document.getElementById('laporanJenis').value;

    document.getElementById('lapTotalKegiatan').textContent = jadwalData.length;
    const picSet = new Set(jadwalData.map(item => item.pic));
    document.getElementById('lapTotalPic').textContent = picSet.size;
    const totalPengunjung = capaianData.reduce((sum, d) => sum + d.jumlah, 0);
    document.getElementById('lapTotalPengunjung').textContent = totalPengunjung;

    const now = new Date();
    document.getElementById('lapPeriode').textContent = now.toLocaleDateString('id-ID', {
        month: 'long', year: 'numeric'
    });
    document.getElementById('lapTanggalCetak').textContent = now.toLocaleDateString('id-ID', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    const jenisText = document.getElementById('laporanJenis').options[document.getElementById('laporanJenis').selectedIndex].text;
    document.getElementById('lapJenisLaporan').textContent = jenisText;

    renderLaporanTable(jenis);
    initBarChartLaporan(currentLaporanPeriod);
    initPieChartLaporan();

    document.getElementById('lapJumlahData').textContent = `${jadwalData.length} Data`;
}

function renderLaporanTable(jenis) {
    const tbody = document.getElementById('laporanTableBody');
    const thead = document.getElementById('laporanThead');

    let headers = [];
    let rows = [];

    if (jenis === 'all' || jenis === 'jadwal') {
        headers = ['No', 'Kegiatan', 'Waktu', 'Ruangan', 'Tempat', 'PIC'];
        rows = jadwalData.map((item, index) => ({
            no: index + 1,
            kegiatan: item.kegiatan,
            waktu: item.waktu,
            ruangan: item.ruangan,
            tempat: item.tempat,
            pic: item.pic
        }));
    } else if (jenis === 'capaian') {
        headers = ['No', 'Bulan', 'Jumlah', 'Target', 'Pencapaian', 'Status'];
        rows = capaianData.map((item, index) => ({
            no: index + 1,
            bulan: item.bulan,
            pengunjung: item.jumlah,
            target: item.target,
            pencapaian: `${Math.round((item.jumlah / item.target) * 100)}%`,
            status: item.jumlah >= item.target ? '✅ Tercapai' : '⚠️ Belum'
        }));
    } else if (jenis === 'kalender') {
        headers = ['No', 'Tanggal', 'Kegiatan', 'Waktu', 'Ruangan', 'Tempat', 'PIC'];
        rows = eventData.map((item, index) => ({
            no: index + 1,
            tanggal: item.tanggal,
            kegiatan: item.nama,
            waktu: item.waktu,
            ruangan: item.ruangan,
            tempat: item.tempat,
            pic: item.pic
        }));
    }

    let headerHtml = '<tr>';
    headers.forEach(h => { headerHtml += `<th>${h}</th>`; });
    headerHtml += '</tr>';
    thead.innerHTML = headerHtml;

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${headers.length}" style="text-align:center;color:#888;padding:40px;">📂 Tidak ada data</td></tr>`;
        return;
    }

    let bodyHtml = '';
    rows.forEach(row => {
        bodyHtml += '<tr>';
        Object.values(row).forEach(val => {
            if (typeof val === 'string' && (val.includes('✅') || val.includes('⚠️'))) {
                const isSuccess = val.includes('✅');
                bodyHtml += `<td><span style="background:${isSuccess ? '#4caf50' : '#ff9800'};color:#fff;padding:2px 12px;border-radius:12px;font-size:12px;">${val}</span></td>`;
            } else {
                bodyHtml += `<td>${val}</td>`;
            }
        });
        bodyHtml += '</tr>';
    });
    tbody.innerHTML = bodyHtml;
}

function initBarChartLaporan(period) {
    const ctx = document.getElementById('barChartLaporan').getContext('2d');
    if (barChartLaporanInstance) barChartLaporanInstance.destroy();

    const data = period === 'monthly' ? getMonthlyData() : yearlyData;
    const label = period === 'monthly' ? 'Jumlah Pengunjung per Bulan' : 'Jumlah Pengunjung per Tahun';
    const bgColor = period === 'monthly' ? '#1a237e' : '#ffca28';

    barChartLaporanInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: label,
                data: data.values,
                backgroundColor: bgColor,
                borderColor: period === 'monthly' ? '#0d1445' : '#e6b800',
                borderWidth: 2,
                borderRadius: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'top', labels: { usePointStyle: true, pointStyle: 'circle', padding: 16, font: { size: 13 } } }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#eee' }, ticks: { font: { size: 12 } } },
                x: { grid: { display: false }, ticks: { font: { size: 12 } } }
            }
        }
    });
}

function initPieChartLaporan() {
    const ctx = document.getElementById('pieChartLaporan').getContext('2d');
    if (pieChartLaporanInstance) pieChartLaporanInstance.destroy();

    pieChartLaporanInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: kategoriData.labels,
            datasets: [{
                data: kategoriData.values,
                backgroundColor: kategoriData.colors,
                borderWidth: 3,
                borderColor: '#fff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { padding: 16, usePointStyle: true, pointStyle: 'circle', font: { size: 13 } } }
            }
        }
    });
}

function ubahGrafikLaporan(period) {
    currentLaporanPeriod = period;
    document.querySelectorAll('#page-laporan .filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.period === period) btn.classList.add('active');
    });
    initBarChartLaporan(period);
}

// ============================================
// EXPORT FUNCTIONS
// ============================================
function exportPDF() {
    alert('📄 Download PDF\n\nGunakan tombol "Cetak" dan pilih "Save as PDF"');
}

function exportExcel() {
    const table = document.getElementById('laporanTable');
    let csv = '';
    const headers = document.querySelectorAll('#laporanThead th');
    headers.forEach(th => { csv += th.textContent + ','; });
    csv += '\n';
    const rows = document.querySelectorAll('#laporanTableBody tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach(cell => {
            let text = cell.textContent.trim();
            text = text.replace(/[^\w\s,.]/g, '').trim();
            csv += '"' + text + '",';
        });
        csv += '\n';
    });
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Laporan_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    alert('✅ File Excel (CSV) berhasil didownload!');
}

function printLaporan() {
    generateLaporan();
    setTimeout(() => { window.print(); }, 300);
}

function exportWord() {
    alert('📝 Download Word\n\nCopy data dari tabel dan paste ke Word.');
}

// ============================================
// TANGGAL SEKARANG
// ============================================
function setCurrentDate() {
    const now = new Date();
    document.getElementById('currentDate').textContent = now.toLocaleDateString('id-ID', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
}

// ============================================
// HAPUS SEMUA DATA
// ============================================
function resetAllData() {
    if (confirm('⚠️ Yakin ingin menghapus SEMUA data? Ini tidak bisa dibatalkan!')) {
        localStorage.removeItem('jadwalData');
        localStorage.removeItem('eventData');
        localStorage.removeItem('capaianData');
        localStorage.removeItem('nextEventId');
        localStorage.removeItem('nextJadwalId');
        location.reload();
    }
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    muatSemuaData();

    renderJadwal();
    renderJadwalFull();
    renderCalendar(currentMonth, currentYear);
    renderCalendarFull(currentMonthFull, currentYearFull);
    renderDashboardEvents();
    updateStats();
    setCurrentDate();
    renderCapaianTable();

    initBarChart('monthly');
    initPieChart();
    initBarChartFull('monthly');
    initPieChartFull();
    initBarChartLaporan('monthly');
    initPieChartLaporan();

    generateLaporan();
    simpanSemuaData();

    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').style.transform = 'translateX(-100%)';
    }

    console.log('✅ Data berhasil dimuat dari localStorage!');
    console.log('📋 Jadwal:', jadwalData.length, 'data');
    console.log('📅 Event:', eventData.length, 'data');
    console.log('📊 Capaian:', capaianData.length, 'data');
});

console.log('💡 Untuk mereset semua data, ketik: resetAllData()');
