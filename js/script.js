// ============================================
// MASTER DATA
// ============================================

let masterRuangan = ['R. Meeting 1', 'R. Meeting 2', 'R. VIP', 'Lab. Komputer', 'Aula Utama', 'Training Center', 'Aula Lantai 2'];
let masterTempat = ['Gedung A Lantai 2', 'Gedung B Lantai 3', 'Gedung C Lantai 2', 'Gedung A Lantai 1', 'Lapangan BRI'];
let masterPic = ['Budi', 'Siti', 'Andi', 'Dewi', 'Rina', 'Agus'];
let masterInstansi = ['Mahasiswa', 'Guru', 'Dosen', 'Masyarakat', 'Instansi Pemerintah', 'Perusahaan Swasta', 'Lembaga Non-Profit'];

// ============================================
// DATA JADWAL (4 Jenis)
// ============================================

// 1. Data Jadwal Kunjungan
let kunjunganData = [
    { id: 1, nama: 'Budi Santoso', instansi: 'PT. Maju Jaya', tanggal: '2026-06-25', waktu: '09:00 - 10:00', tujuan: 'Rapat Kerjasama', pic: 'Andi' },
    { id: 2, nama: 'Siti Rahayu', instansi: 'Dinas Pendidikan', tanggal: '2026-06-26', waktu: '10:30 - 11:30', tujuan: 'Koordinasi Program', pic: 'Budi' },
    { id: 3, nama: 'Ahmad Fauzi', instansi: 'Kementerian BUMN', tanggal: '2026-06-27', waktu: '13:00 - 14:30', tujuan: 'Monitoring Proyek', pic: 'Siti' },
];
let nextKunjunganId = 4;

// 2. Data Jadwal Pemakaian Ruang
let ruangData = [
    { id: 1, kegiatan: 'Rapat Koordinasi', ruangan: 'R. Meeting 1', tanggal: '2026-06-25', waktu: '08:00 - 09:30', kapasitas: 20, pic: 'Budi' },
    { id: 2, kegiatan: 'Workshop UI/UX', ruangan: 'Lab. Komputer', tanggal: '2026-06-26', waktu: '10:00 - 12:00', kapasitas: 15, pic: 'Siti' },
    { id: 3, kegiatan: 'Presentasi Client', ruangan: 'R. VIP', tanggal: '2026-06-27', waktu: '14:30 - 16:00', kapasitas: 10, pic: 'Dewi' },
];
let nextRuangId = 4;

// 3. Data Jadwal Balai BRI
let balaiData = [
    { id: 1, kegiatan: 'Rapat Direksi', jenis: 'Rapat Internal', tanggal: '2026-06-25', waktu: '09:00 - 11:00', ruangan: 'Aula Utama', pic: 'Andi' },
    { id: 2, kegiatan: 'Pelatihan Karyawan', jenis: 'Pelatihan', tanggal: '2026-06-26', waktu: '13:00 - 16:00', ruangan: 'Training Center', pic: 'Siti' },
    { id: 3, kegiatan: 'Sosialisasi Program', jenis: 'Sosialisasi', tanggal: '2026-06-27', waktu: '10:00 - 12:00', ruangan: 'Aula Lantai 2', pic: 'Budi' },
];
let nextBalaiId = 4;

// 4. Data Jadwal Per Program
let programData = [
    { id: 1, program: 'Pemberdayaan UMKM', kegiatan: 'Pelatihan Digital Marketing', tanggal: '2026-06-25', waktu: '09:00 - 12:00', lokasi: 'Aula Utama', pic: 'Dewi' },
    { id: 2, program: 'Program Kesehatan', kegiatan: 'Screening Kesehatan Gratis', tanggal: '2026-06-26', waktu: '08:00 - 14:00', lokasi: 'Lapangan BRI', pic: 'Andi' },
    { id: 3, program: 'Program Pendidikan', kegiatan: 'Beasiswa Prestasi', tanggal: '2026-06-27', waktu: '10:00 - 11:30', lokasi: 'R. VIP', pic: 'Siti' },
];
let nextProgramId = 4;

// ============================================
// DATA EVENT KALENDER
// ============================================
let eventData = [];
let nextEventId = 1;

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
// LOCALSTORAGE
// ============================================
function simpanSemuaData() {
    try {
        localStorage.setItem('masterRuangan', JSON.stringify(masterRuangan));
        localStorage.setItem('masterTempat', JSON.stringify(masterTempat));
        localStorage.setItem('masterPic', JSON.stringify(masterPic));
        localStorage.setItem('masterInstansi', JSON.stringify(masterInstansi));
        localStorage.setItem('kunjunganData', JSON.stringify(kunjunganData));
        localStorage.setItem('ruangData', JSON.stringify(ruangData));
        localStorage.setItem('balaiData', JSON.stringify(balaiData));
        localStorage.setItem('programData', JSON.stringify(programData));
        localStorage.setItem('eventData', JSON.stringify(eventData));
        localStorage.setItem('capaianData', JSON.stringify(capaianData));
        localStorage.setItem('nextKunjunganId', String(nextKunjunganId));
        localStorage.setItem('nextRuangId', String(nextRuangId));
        localStorage.setItem('nextBalaiId', String(nextBalaiId));
        localStorage.setItem('nextProgramId', String(nextProgramId));
        localStorage.setItem('nextEventId', String(nextEventId));
    } catch (e) {
        console.log('Gagal menyimpan data:', e);
    }
}

function muatSemuaData() {
    try {
        const savedRuangan = localStorage.getItem('masterRuangan');
        const savedTempat = localStorage.getItem('masterTempat');
        const savedPic = localStorage.getItem('masterPic');
        const savedInstansi = localStorage.getItem('masterInstansi');
        const savedKunjungan = localStorage.getItem('kunjunganData');
        const savedRuang = localStorage.getItem('ruangData');
        const savedBalai = localStorage.getItem('balaiData');
        const savedProgram = localStorage.getItem('programData');
        const savedEvent = localStorage.getItem('eventData');
        const savedCapaian = localStorage.getItem('capaianData');
        const savedNextKunjunganId = localStorage.getItem('nextKunjunganId');
        const savedNextRuangId = localStorage.getItem('nextRuangId');
        const savedNextBalaiId = localStorage.getItem('nextBalaiId');
        const savedNextProgramId = localStorage.getItem('nextProgramId');
        const savedNextEventId = localStorage.getItem('nextEventId');

        if (savedRuangan) masterRuangan = JSON.parse(savedRuangan);
        if (savedTempat) masterTempat = JSON.parse(savedTempat);
        if (savedPic) masterPic = JSON.parse(savedPic);
        if (savedInstansi) masterInstansi = JSON.parse(savedInstansi);
        if (savedKunjungan) kunjunganData = JSON.parse(savedKunjungan);
        if (savedRuang) ruangData = JSON.parse(savedRuang);
        if (savedBalai) balaiData = JSON.parse(savedBalai);
        if (savedProgram) programData = JSON.parse(savedProgram);
        if (savedEvent) eventData = JSON.parse(savedEvent);
        if (savedCapaian) capaianData = JSON.parse(savedCapaian);
        if (savedNextKunjunganId) nextKunjunganId = parseInt(savedNextKunjunganId) || 4;
        if (savedNextRuangId) nextRuangId = parseInt(savedNextRuangId) || 4;
        if (savedNextBalaiId) nextBalaiId = parseInt(savedNextBalaiId) || 4;
        if (savedNextProgramId) nextProgramId = parseInt(savedNextProgramId) || 4;
        if (savedNextEventId) nextEventId = parseInt(savedNextEventId) || 1;
    } catch (e) {
        console.log('Gagal memuat data:', e);
    }
}

// ============================================
// SINKRONISASI JADWAL KE KALENDER
// ============================================
function sinkronkanJadwalKeKalender() {
    eventData = eventData.filter(e => !e.dariJadwal);

    kunjunganData.forEach(item => {
        const tanggal = parseInt(item.tanggal.split('-')[2]) || 1;
        eventData.push({
            id: nextEventId++,
            tanggal: tanggal,
            nama: `📋 ${item.nama}`,
            waktu: item.waktu,
            ruangan: item.ruangan || '-',
            tempat: item.instansi || '-',
            pic: item.pic,
            dariJadwal: true,
            sumber: 'Kunjungan',
            sumberId: item.id
        });
    });

    ruangData.forEach(item => {
        const tanggal = parseInt(item.tanggal.split('-')[2]) || 1;
        eventData.push({
            id: nextEventId++,
            tanggal: tanggal,
            nama: `🏢 ${item.kegiatan}`,
            waktu: item.waktu,
            ruangan: item.ruangan,
            tempat: item.ruangan,
            pic: item.pic,
            dariJadwal: true,
            sumber: 'Pemakaian Ruang',
            sumberId: item.id
        });
    });

    balaiData.forEach(item => {
        const tanggal = parseInt(item.tanggal.split('-')[2]) || 1;
        eventData.push({
            id: nextEventId++,
            tanggal: tanggal,
            nama: `🏛️ ${item.kegiatan}`,
            waktu: item.waktu,
            ruangan: item.ruangan,
            tempat: item.ruangan,
            pic: item.pic,
            dariJadwal: true,
            sumber: 'Balai BRI',
            sumberId: item.id
        });
    });

    programData.forEach(item => {
        const tanggal = parseInt(item.tanggal.split('-')[2]) || 1;
        eventData.push({
            id: nextEventId++,
            tanggal: tanggal,
            nama: `📊 ${item.program}`,
            waktu: item.waktu,
            ruangan: item.lokasi || '-',
            tempat: item.lokasi || '-',
            pic: item.pic,
            dariJadwal: true,
            sumber: 'Per Program',
            sumberId: item.id
        });
    });

    renderCalendar(currentMonth, currentYear);
    renderCalendarFull(currentMonthFull, currentYearFull);
    renderDashboardEvents();
    simpanSemuaData();
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

function switchMenu(page) {
    const link = document.querySelector(`.menu a[data-page="${page}"]`);
    if (link) link.click();
}

function switchTab(tab) {
    setTimeout(() => {
        const tabBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
        if (tabBtn) tabBtn.click();
    }, 200);
}

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
        if (page === 'jadwal') {
            renderKunjunganTable();
            renderRuangTable();
            renderBalaiTable();
            renderProgramTable();
            updateDropdowns();
        }
        if (page === 'laporan') setTimeout(generateLaporan, 100);
    });
});

// ============================================
// FUNGSI UPDATE DROPDOWN
// ============================================
function updateDropdowns() {
    const ruanganSelects = document.querySelectorAll('#fRuangan, #eventRuangan');
    ruanganSelects.forEach(select => {
        const currentVal = select.value;
        select.innerHTML = '<option value="">Pilih Ruangan</option>';
        masterRuangan.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item;
            opt.textContent = item;
            select.appendChild(opt);
        });
        if (currentVal && masterRuangan.includes(currentVal)) {
            select.value = currentVal;
        }
    });

    const tempatSelects = document.querySelectorAll('#fTempat, #eventTempat');
    tempatSelects.forEach(select => {
        const currentVal = select.value;
        select.innerHTML = '<option value="">Pilih Tempat</option>';
        masterTempat.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item;
            opt.textContent = item;
            select.appendChild(opt);
        });
        if (currentVal && masterTempat.includes(currentVal)) {
            select.value = currentVal;
        }
    });

    const picSelects = document.querySelectorAll('#fPic, #eventPic');
    picSelects.forEach(select => {
        const currentVal = select.value;
        select.innerHTML = '<option value="">Pilih PIC</option>';
        masterPic.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item;
            opt.textContent = item;
            select.appendChild(opt);
        });
        if (currentVal && masterPic.includes(currentVal)) {
            select.value = currentVal;
        }
    });

    const instansiSelects = document.querySelectorAll('#fInstansi');
    instansiSelects.forEach(select => {
        const currentVal = select.value;
        select.innerHTML = '<option value="">Pilih Instansi</option>';
        masterInstansi.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item;
            opt.textContent = item;
            select.appendChild(opt);
        });
        if (currentVal && masterInstansi.includes(currentVal)) {
            select.value = currentVal;
        }
    });
}

// ============================================
// TAB NAVIGASI JADWAL
// ============================================
let currentTab = 'kunjungan';

function switchTab(tab) {
    currentTab = tab;

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tab) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tab}`).classList.add('active');

    renderJadwalTab(tab);
}

function renderJadwalTab(tab) {
    switch(tab) {
        case 'kunjungan':
            renderKunjunganTable();
            break;
        case 'ruang':
            renderRuangTable();
            break;
        case 'balai':
            renderBalaiTable();
            break;
        case 'program':
            renderProgramTable();
            break;
        default:
            break;
    }
}

// ============================================
// RENDER TABEL KUNJUNGAN
// ============================================
function renderKunjunganTable() {
    const tbody = document.getElementById('kunjunganTableBody');
    tbody.innerHTML = kunjunganData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${item.nama}</strong></td>
            <td>${item.instansi}</td>
            <td>${item.tanggal}</td>
            <td>${item.waktu}</td>
            <td>${item.tujuan}</td>
            <td>${item.pic}</td>
            <td>
                <button class="btn-edit" onclick="editJadwal('kunjungan', ${item.id})">✏️</button>
                <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusJadwal('kunjungan', ${item.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// ============================================
// RENDER TABEL PEMAKAIAN RUANG
// ============================================
function renderRuangTable() {
    const tbody = document.getElementById('ruangTableBody');
    tbody.innerHTML = ruangData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${item.kegiatan}</strong></td>
            <td>${item.ruangan}</td>
            <td>${item.tanggal}</td>
            <td>${item.waktu}</td>
            <td>${item.kapasitas} orang</td>
            <td>${item.pic}</td>
            <td>
                <button class="btn-edit" onclick="editJadwal('ruang', ${item.id})">✏️</button>
                <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusJadwal('ruang', ${item.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// ============================================
// RENDER TABEL BALAI BRI
// ============================================
function renderBalaiTable() {
    const tbody = document.getElementById('balaiTableBody');
    tbody.innerHTML = balaiData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${item.kegiatan}</strong></td>
            <td>${item.jenis}</td>
            <td>${item.tanggal}</td>
            <td>${item.waktu}</td>
            <td>${item.ruangan}</td>
            <td>${item.pic}</td>
            <td>
                <button class="btn-edit" onclick="editJadwal('balai', ${item.id})">✏️</button>
                <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusJadwal('balai', ${item.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// ============================================
// RENDER TABEL PER PROGRAM
// ============================================
function renderProgramTable() {
    const tbody = document.getElementById('programTableBody');
    tbody.innerHTML = programData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td><strong>${item.program}</strong></td>
            <td>${item.kegiatan}</td>
            <td>${item.tanggal}</td>
            <td>${item.waktu}</td>
            <td>${item.lokasi}</td>
            <td>${item.pic}</td>
            <td>
                <button class="btn-edit" onclick="editJadwal('program', ${item.id})">✏️</button>
                <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusJadwal('program', ${item.id})">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// ============================================
// RINGKASAN 4 JADWAL DI BERANDA
// ============================================
function renderRingkasanJadwal() {
    const today = new Date().toISOString().split('T')[0];

    const kunjunganHariIni = kunjunganData.filter(item => item.tanggal === today).slice(0, 5);
    const tbodyKunjungan = document.getElementById('ringkasanKunjungan');
    if (kunjunganHariIni.length === 0) {
        tbodyKunjungan.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:10px;">Tidak ada kunjungan</td></tr>`;
    } else {
        tbodyKunjungan.innerHTML = kunjunganHariIni.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${item.nama}</strong></td>
                <td>${item.waktu}</td>
                <td>${item.pic}</td>
            </tr>
        `).join('');
    }

    const ruangHariIni = ruangData.filter(item => item.tanggal === today).slice(0, 5);
    const tbodyRuang = document.getElementById('ringkasanRuang');
    if (ruangHariIni.length === 0) {
        tbodyRuang.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:10px;">Tidak ada pemakaian ruang</td></tr>`;
    } else {
        tbodyRuang.innerHTML = ruangHariIni.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${item.kegiatan}</strong></td>
                <td>${item.waktu}</td>
                <td>${item.ruangan}</td>
            </tr>
        `).join('');
    }

    const balaiHariIni = balaiData.filter(item => item.tanggal === today).slice(0, 5);
    const tbodyBalai = document.getElementById('ringkasanBalai');
    if (balaiHariIni.length === 0) {
        tbodyBalai.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:10px;">Tidak ada kegiatan Balai BRI</td></tr>`;
    } else {
        tbodyBalai.innerHTML = balaiHariIni.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${item.kegiatan}</strong></td>
                <td>${item.waktu}</td>
                <td>${item.ruangan}</td>
            </tr>
        `).join('');
    }

    const programHariIni = programData.filter(item => item.tanggal === today).slice(0, 5);
    const tbodyProgram = document.getElementById('ringkasanProgram');
    if (programHariIni.length === 0) {
        tbodyProgram.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888;padding:10px;">Tidak ada kegiatan program</td></tr>`;
    } else {
        tbodyProgram.innerHTML = programHariIni.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${item.program}</strong></td>
                <td>${item.waktu}</td>
                <td>${item.lokasi}</td>
            </tr>
        `).join('');
    }
}

// ============================================
// CRUD JADWAL (UMUM)
// ============================================
function tambahJadwal() {
    document.getElementById('modalJadwalTitle').textContent = 'Tambah Jadwal';
    document.getElementById('jadwalId').value = '';
    document.getElementById('btnDeleteJadwal').style.display = 'none';

    document.getElementById('fNamaTamu').value = '';
    document.getElementById('fInstansi').value = '';
    document.getElementById('fTujuan').value = '';
    document.getElementById('fKegiatanRuang').value = '';
    document.getElementById('fKapasitas').value = '';
    document.getElementById('fKegiatanBalai').value = '';
    document.getElementById('fJenisKegiatan').value = '';
    document.getElementById('fNamaProgram').value = '';
    document.getElementById('fKegiatanProgram').value = '';
    document.getElementById('fTanggal').value = new Date().toISOString().split('T')[0];
    document.getElementById('fWaktu').value = '';
    document.getElementById('fRuangan').value = '';
    document.getElementById('fTempat').value = '';
    document.getElementById('fPic').value = '';

    updateDropdowns();
    ubahFormJadwal();
    document.getElementById('jadwalModal').classList.add('active');
}

function editJadwal(jenis, id) {
    let data, title;
    switch(jenis) {
        case 'kunjungan':
            data = kunjunganData.find(d => d.id === id);
            title = 'Edit Jadwal Kunjungan';
            document.getElementById('formJenis').value = 'kunjungan';
            document.getElementById('fNamaTamu').value = data.nama;
            document.getElementById('fInstansi').value = data.instansi;
            document.getElementById('fTujuan').value = data.tujuan;
            break;
        case 'ruang':
            data = ruangData.find(d => d.id === id);
            title = 'Edit Jadwal Pemakaian Ruang';
            document.getElementById('formJenis').value = 'ruang';
            document.getElementById('fKegiatanRuang').value = data.kegiatan;
            document.getElementById('fKapasitas').value = data.kapasitas;
            break;
        case 'balai':
            data = balaiData.find(d => d.id === id);
            title = 'Edit Jadwal Balai BRI';
            document.getElementById('formJenis').value = 'balai';
            document.getElementById('fKegiatanBalai').value = data.kegiatan;
            document.getElementById('fJenisKegiatan').value = data.jenis;
            break;
        case 'program':
            data = programData.find(d => d.id === id);
            title = 'Edit Jadwal Per Program';
            document.getElementById('formJenis').value = 'program';
            document.getElementById('fNamaProgram').value = data.program;
            document.getElementById('fKegiatanProgram').value = data.kegiatan;
            break;
        default:
            return;
    }

    document.getElementById('modalJadwalTitle').textContent = title;
    document.getElementById('jadwalId').value = id;
    document.getElementById('jadwalJenis').value = jenis;
    document.getElementById('fTanggal').value = data.tanggal;
    document.getElementById('fWaktu').value = data.waktu;
    document.getElementById('fRuangan').value = data.ruangan || data.lokasi || '';
    document.getElementById('fTempat').value = data.tempat || data.lokasi || '';
    document.getElementById('fPic').value = data.pic;
    document.getElementById('btnDeleteJadwal').style.display = 'inline-block';

    updateDropdowns();
    ubahFormJadwal();
    document.getElementById('jadwalModal').classList.add('active');
}

function saveJadwal(e) {
    e.preventDefault();

    const id = document.getElementById('jadwalId').value;
    const jenis = document.getElementById('formJenis').value;
    const tanggal = document.getElementById('fTanggal').value;
    const waktu = document.getElementById('fWaktu').value;
    const ruangan = document.getElementById('fRuangan').value;
    const tempat = document.getElementById('fTempat').value;
    const pic = document.getElementById('fPic').value;

    if (!tanggal || !waktu || !ruangan || !pic) {
        alert('⚠️ Semua field wajib diisi!');
        return;
    }

    let dataBaru;

    switch(jenis) {
        case 'kunjungan':
            const nama = document.getElementById('fNamaTamu').value;
            const instansi = document.getElementById('fInstansi').value;
            const tujuan = document.getElementById('fTujuan').value;
            if (!nama || !instansi || !tujuan) {
                alert('⚠️ Semua field wajib diisi!');
                return;
            }
            dataBaru = { nama, instansi, tanggal, waktu, tujuan, ruangan, pic };
            if (id) {
                const index = kunjunganData.findIndex(d => d.id === parseInt(id));
                kunjunganData[index] = { ...kunjunganData[index], ...dataBaru };
                alert('✅ Jadwal kunjungan berhasil diupdate!');
            } else {
                kunjunganData.push({ id: nextKunjunganId++, ...dataBaru });
                alert('✅ Jadwal kunjungan berhasil ditambahkan!');
            }
            renderKunjunganTable();
            break;
        case 'ruang':
            const kegiatanRuang = document.getElementById('fKegiatanRuang').value;
            const kapasitas = document.getElementById('fKapasitas').value;
            if (!kegiatanRuang || !kapasitas) {
                alert('⚠️ Semua field wajib diisi!');
                return;
            }
            dataBaru = { kegiatan: kegiatanRuang, ruangan, tanggal, waktu, kapasitas: parseInt(kapasitas), pic };
            if (id) {
                const index = ruangData.findIndex(d => d.id === parseInt(id));
                ruangData[index] = { ...ruangData[index], ...dataBaru };
                alert('✅ Jadwal pemakaian ruang berhasil diupdate!');
            } else {
                ruangData.push({ id: nextRuangId++, ...dataBaru });
                alert('✅ Jadwal pemakaian ruang berhasil ditambahkan!');
            }
            renderRuangTable();
            break;
        case 'balai':
            const kegiatanBalai = document.getElementById('fKegiatanBalai').value;
            const jenisKegiatan = document.getElementById('fJenisKegiatan').value;
            if (!kegiatanBalai || !jenisKegiatan) {
                alert('⚠️ Semua field wajib diisi!');
                return;
            }
            dataBaru = { kegiatan: kegiatanBalai, jenis: jenisKegiatan, ruangan, tanggal, waktu, pic };
            if (id) {
                const index = balaiData.findIndex(d => d.id === parseInt(id));
                balaiData[index] = { ...balaiData[index], ...dataBaru };
                alert('✅ Jadwal Balai BRI berhasil diupdate!');
            } else {
                balaiData.push({ id: nextBalaiId++, ...dataBaru });
                alert('✅ Jadwal Balai BRI berhasil ditambahkan!');
            }
            renderBalaiTable();
            break;
        case 'program':
            const namaProgram = document.getElementById('fNamaProgram').value;
            const kegiatanProgram = document.getElementById('fKegiatanProgram').value;
            if (!namaProgram || !kegiatanProgram) {
                alert('⚠️ Semua field wajib diisi!');
                return;
            }
            dataBaru = { program: namaProgram, kegiatan: kegiatanProgram, tanggal, waktu, lokasi: ruangan, pic };
            if (id) {
                const index = programData.findIndex(d => d.id === parseInt(id));
                programData[index] = { ...programData[index], ...dataBaru };
                alert('✅ Jadwal per program berhasil diupdate!');
            } else {
                programData.push({ id: nextProgramId++, ...dataBaru });
                alert('✅ Jadwal per program berhasil ditambahkan!');
            }
            renderProgramTable();
            break;
        default:
            return;
    }

    renderRingkasanJadwal();
    updateStats();
    sinkronkanJadwalKeKalender();
    simpanSemuaData();
    closeJadwalModal();
}

function hapusJadwal(jenis, id) {
    if (confirm('Yakin ingin menghapus jadwal ini?')) {
        switch(jenis) {
            case 'kunjungan':
                kunjunganData = kunjunganData.filter(d => d.id !== id);
                renderKunjunganTable();
                break;
            case 'ruang':
                ruangData = ruangData.filter(d => d.id !== id);
                renderRuangTable();
                break;
            case 'balai':
                balaiData = balaiData.filter(d => d.id !== id);
                renderBalaiTable();
                break;
            case 'program':
                programData = programData.filter(d => d.id !== id);
                renderProgramTable();
                break;
            default:
                return;
        }
        renderRingkasanJadwal();
        updateStats();
        sinkronkanJadwalKeKalender();
        simpanSemuaData();
        alert('✅ Jadwal berhasil dihapus!');
    }
}

function hapusJadwalFromModal() {
    const id = document.getElementById('jadwalId').value;
    const jenis = document.getElementById('jadwalJenis').value || document.getElementById('formJenis').value;
    if (!id) return;
    if (confirm('Yakin ingin menghapus jadwal ini?')) {
        hapusJadwal(jenis, parseInt(id));
        closeJadwalModal();
    }
}

function closeJadwalModal() {
    document.getElementById('jadwalModal').classList.remove('active');
}

function ubahFormJadwal() {
    const jenis = document.getElementById('formJenis').value;
    document.getElementById('fieldKunjungan').style.display = jenis === 'kunjungan' ? 'block' : 'none';
    document.getElementById('fieldRuang').style.display = jenis === 'ruang' ? 'block' : 'none';
    document.getElementById('fieldBalai').style.display = jenis === 'balai' ? 'block' : 'none';
    document.getElementById('fieldProgram').style.display = jenis === 'program' ? 'block' : 'none';
}

// ============================================
// FUNGSI TAMBAH MASTER CEPAT (DARI FORM)
// ============================================

function tambahMasterRuanganCepat() {
    const val = prompt('Masukkan nama ruangan baru:');
    if (!val) return;
    if (masterRuangan.includes(val)) { alert('Ruangan sudah ada!'); return; }
    masterRuangan.push(val);
    updateDropdowns();
    renderMasterData();
    simpanSemuaData();
    alert('✅ Ruangan berhasil ditambahkan!');
}

function tambahMasterTempatCepat() {
    const val = prompt('Masukkan nama tempat baru:');
    if (!val) return;
    if (masterTempat.includes(val)) { alert('Tempat sudah ada!'); return; }
    masterTempat.push(val);
    updateDropdowns();
    renderMasterData();
    simpanSemuaData();
    alert('✅ Tempat berhasil ditambahkan!');
}

function tambahMasterPicCepat() {
    const val = prompt('Masukkan nama PIC baru:');
    if (!val) return;
    if (masterPic.includes(val)) { alert('PIC sudah ada!'); return; }
    masterPic.push(val);
    updateDropdowns();
    renderMasterData();
    simpanSemuaData();
    alert('✅ PIC berhasil ditambahkan!');
}

function tambahMasterInstansiCepat() {
    const val = prompt('Masukkan nama instansi baru:');
    if (!val) return;
    if (masterInstansi.includes(val)) { alert('Instansi sudah ada!'); return; }
    masterInstansi.push(val);
    updateDropdowns();
    renderMasterData();
    simpanSemuaData();
    alert('✅ Instansi berhasil ditambahkan!');
}

// ============================================
// MASTER DATA CRUD
// ============================================
function bukaMasterData() {
    document.getElementById('masterModal').classList.add('active');
    renderMasterData();
}

function closeMasterModal() {
    document.getElementById('masterModal').classList.remove('active');
}

let currentMasterTab = 'ruangan';

function switchMasterTab(tab) {
    currentMasterTab = tab;
    document.querySelectorAll('.master-tab').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('#masterModal .tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(`master-${tab}`).classList.add('active');
    document.querySelector(`#masterModal .tab-btn[onclick="switchMasterTab('${tab}')"]`).classList.add('active');
    renderMasterData();
}

function renderMasterData() {
    const listRuangan = document.getElementById('listRuangan');
    listRuangan.innerHTML = masterRuangan.map(item => `
        <span class="master-item">
            ${item}
            <button onclick="hapusMaster('ruangan', '${item}')">✕</button>
        </span>
    `).join('');

    const listTempat = document.getElementById('listTempat');
    listTempat.innerHTML = masterTempat.map(item => `
        <span class="master-item">
            ${item}
            <button onclick="hapusMaster('tempat', '${item}')">✕</button>
        </span>
    `).join('');

    const listPic = document.getElementById('listPic');
    listPic.innerHTML = masterPic.map(item => `
        <span class="master-item">
            ${item}
            <button onclick="hapusMaster('pic', '${item}')">✕</button>
        </span>
    `).join('');

    const listInstansi = document.getElementById('listInstansi');
    if (listInstansi) {
        listInstansi.innerHTML = masterInstansi.map(item => `
            <span class="master-item">
                ${item}
                <button onclick="hapusMaster('instansi', '${item}')">✕</button>
            </span>
        `).join('');
    }
}

function tambahMasterRuangan() {
    const input = document.getElementById('inputRuangan');
    const val = input.value.trim();
    if (!val) { alert('Masukkan nama ruangan!'); return; }
    if (masterRuangan.includes(val)) { alert('Ruangan sudah ada!'); return; }
    masterRuangan.push(val);
    input.value = '';
    renderMasterData();
    updateDropdowns();
    simpanSemuaData();
    alert('✅ Ruangan berhasil ditambahkan!');
}

function tambahMasterTempat() {
    const input = document.getElementById('inputTempat');
    const val = input.value.trim();
    if (!val) { alert('Masukkan nama tempat!'); return; }
    if (masterTempat.includes(val)) { alert('Tempat sudah ada!'); return; }
    masterTempat.push(val);
    input.value = '';
    renderMasterData();
    updateDropdowns();
    simpanSemuaData();
    alert('✅ Tempat berhasil ditambahkan!');
}

function tambahMasterPic() {
    const input = document.getElementById('inputPic');
    const val = input.value.trim();
    if (!val) { alert('Masukkan nama PIC!'); return; }
    if (masterPic.includes(val)) { alert('PIC sudah ada!'); return; }
    masterPic.push(val);
    input.value = '';
    renderMasterData();
    updateDropdowns();
    simpanSemuaData();
    alert('✅ PIC berhasil ditambahkan!');
}

function tambahMasterInstansi() {
    const input = document.getElementById('inputInstansi');
    const val = input.value.trim();
    if (!val) { alert('Masukkan nama instansi!'); return; }
    if (masterInstansi.includes(val)) { alert('Instansi sudah ada!'); return; }
    masterInstansi.push(val);
    input.value = '';
    renderMasterData();
    updateDropdowns();
    simpanSemuaData();
    alert('✅ Instansi berhasil ditambahkan!');
}

function hapusMaster(jenis, value) {
    if (!confirm(`Hapus "${value}" dari master ${jenis}?`)) return;
    switch(jenis) {
        case 'ruangan':
            masterRuangan = masterRuangan.filter(item => item !== value);
            break;
        case 'tempat':
            masterTempat = masterTempat.filter(item => item !== value);
            break;
        case 'pic':
            masterPic = masterPic.filter(item => item !== value);
            break;
        case 'instansi':
            masterInstansi = masterInstansi.filter(item => item !== value);
            break;
    }
    renderMasterData();
    updateDropdowns();
    simpanSemuaData();
    alert('✅ Data master berhasil dihapus!');
}

// ============================================
// PRINT JADWAL
// ============================================
function printJadwal() {
    const now = new Date();
    document.getElementById('printDate').textContent = now.toLocaleDateString('id-ID', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
    window.print();
}

// ============================================
// DASHBOARD EVENT LIST
// ============================================
function renderDashboardEvents() {
    const container = document.getElementById('dashboardEventList');
    const badge = document.getElementById('eventCountBadge');
    if (!container) return;

    const sortedEvents = [...eventData].sort((a, b) => a.tanggal - b.tanggal);
    const totalEvents = sortedEvents.length;

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
// KALENDER DASHBOARD
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
// KALENDER FULL
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
                ${e.dariJadwal ? '<span style="font-size:10px;color:#888;margin-left:8px;">📌 dari Jadwal</span>' : ''}
            </div>
            <div style="display:flex;gap:6px;">
                ${e.dariJadwal ? 
                    `<button class="btn-edit" onclick="alert('Event ini berasal dari jadwal ${e.sumber}. Edit di halaman Jadwal.')">🔗 Lihat Sumber</button>` :
                    `<button class="btn-edit" onclick="editEvent(${e.id})">✏️ Edit</button>
                    <button style="background:#f44336;color:#fff;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;" onclick="hapusEventById(${e.id})">🗑️</button>`
                }
            </div>
        </div>
    `).join('');
}

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
    updateDropdowns();
    document.getElementById('eventModal').classList.add('active');
}

function tambahEventTanggal(tanggal) {
    tambahEvent();
    document.getElementById('eventTanggal').value = tanggal;
}

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
    updateDropdowns();
    document.getElementById('eventModal').classList.add('active');
}

function saveEvent(e) {
    e.preventDefault();

    const id = document.getElementById('eventId').value;
    const tanggal = parseInt(document.getElementById('eventTanggal').value);
    const nama = document.getElementById('eventNama').value.trim();
    const waktu = document.getElementById('eventWaktu').value;
    const ruangan = document.getElementById('eventRuangan').value;
    const tempat = document.getElementById('eventTempat').value;
    const pic = document.getElementById('eventPic').value;

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
// UPDATE STATS
// ============================================
function updateStats() {
    document.getElementById('totalKunjungan').textContent = kunjunganData.length;
    document.getElementById('totalRuang').textContent = ruangData.length;
    document.getElementById('totalBalai').textContent = balaiData.length;
    document.getElementById('totalProgram').textContent = programData.length;
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

    document.getElementById('lapTotalKunjungan').textContent = kunjunganData.length;
    document.getElementById('lapTotalRuang').textContent = ruangData.length;
    document.getElementById('lapTotalBalai').textContent = balaiData.length;
    document.getElementById('lapTotalProgram').textContent = programData.length;

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

    const totalData = kunjunganData.length + ruangData.length + balaiData.length + programData.length;
    document.getElementById('lapJumlahData').textContent = `${totalData} Data`;
}

function renderLaporanTable(jenis) {
    const tbody = document.getElementById('laporanTableBody');
    const thead = document.getElementById('laporanThead');

    let headers = [];
    let rows = [];

    if (jenis === 'all' || jenis === 'kunjungan') {
        headers = ['No', 'Jenis', 'Nama Tamu', 'Instansi', 'Tanggal', 'Waktu', 'Tujuan', 'PIC'];
        rows = kunjunganData.map((item, index) => ({
            no: index + 1,
            jenis: '📋 Kunjungan',
            nama: item.nama,
            instansi: item.instansi,
            tanggal: item.tanggal,
            waktu: item.waktu,
            tujuan: item.tujuan,
            pic: item.pic
        }));
    }

    if (jenis === 'all' || jenis === 'ruang') {
        rows = rows.concat(ruangData.map((item, index) => ({
            no: rows.length + index + 1,
            jenis: '🏢 Ruang',
            nama: item.kegiatan,
            instansi: item.ruangan,
            tanggal: item.tanggal,
            waktu: item.waktu,
            tujuan: `${item.kapasitas} orang`,
            pic: item.pic
        })));
    }

    if (jenis === 'all' || jenis === 'balai') {
        rows = rows.concat(balaiData.map((item, index) => ({
            no: rows.length + index + 1,
            jenis: '🏛️ Balai',
            nama: item.kegiatan,
            instansi: item.jenis,
            tanggal: item.tanggal,
            waktu: item.waktu,
            tujuan: item.ruangan,
            pic: item.pic
        })));
    }

    if (jenis === 'all' || jenis === 'program') {
        rows = rows.concat(programData.map((item, index) => ({
            no: rows.length + index + 1,
            jenis: '📊 Program',
            nama: item.program,
            instansi: item.kegiatan,
            tanggal: item.tanggal,
            waktu: item.waktu,
            tujuan: item.lokasi,
            pic: item.pic
        })));
    }

    if (jenis === 'capaian') {
        headers = ['No', 'Bulan', 'Jumlah', 'Target', 'Pencapaian', 'Status'];
        rows = capaianData.map((item, index) => ({
            no: index + 1,
            bulan: item.bulan,
            jumlah: item.jumlah,
            target: item.target,
            pencapaian: `${Math.round((item.jumlah / item.target) * 100)}%`,
            status: item.jumlah >= item.target ? '✅ Tercapai' : '⚠️ Belum'
        }));
    }

    if (jenis === 'kalender') {
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

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center;color:#888;padding:40px;">📂 Tidak ada data</td></tr>`;
        return;
    }

    let headerHtml = '<tr>';
    headers.forEach(h => { headerHtml += `<th>${h}</th>`; });
    headerHtml += '</tr>';
    thead.innerHTML = headerHtml;

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
        localStorage.clear();
        location.reload();
    }
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    muatSemuaData();

    renderKunjunganTable();
    renderRuangTable();
    renderBalaiTable();
    renderProgramTable();
    renderRingkasanJadwal();
    renderCalendar(currentMonth, currentYear);
    renderCalendarFull(currentMonthFull, currentYearFull);
    renderDashboardEvents();
    updateStats();
    setCurrentDate();
    renderCapaianTable();
    updateDropdowns();

    sinkronkanJadwalKeKalender();

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
    console.log('📋 Kunjungan:', kunjunganData.length, 'data');
    console.log('🏢 Ruang:', ruangData.length, 'data');
    console.log('🏛️ Balai:', balaiData.length, 'data');
    console.log('📊 Program:', programData.length, 'data');
    console.log('📅 Event:', eventData.length, 'data');
    console.log('📊 Capaian:', capaianData.length, 'data');
    console.log('📋 Master Ruangan:', masterRuangan.length, 'data');
    console.log('📋 Master Tempat:', masterTempat.length, 'data');
    console.log('📋 Master PIC:', masterPic.length, 'data');
    console.log('📋 Master Instansi:', masterInstansi.length, 'data');
});

console.log('💡 Untuk mereset semua data, ketik: resetAllData()');
