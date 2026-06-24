// ============================================
// DATA
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

const eventDates = [3, 7, 10, 12, 15, 18, 22, 25, 28, 30];

const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    values: [120, 150, 180, 170, 200, 220, 190, 210, 240, 260, 230, 280],
};

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
// SIDEBAR TOGGLE
// ============================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const hamburger = document.getElementById('hamburgerBtn');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const hamburger = document.getElementById('hamburgerBtn');

    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
}

// ============================================
// NAVIGASI
// ============================================
const pageTitles = {
    dashboard: { title: 'Dashboard', subtitle: 'Selamat datang, Admin 👋' },
    jadwal: { title: 'Jadwal Harian', subtitle: 'Kelola semua jadwal kegiatan' },
    kalender: { title: 'Kalender Kegiatan', subtitle: 'Lihat kegiatan per tanggal' },
    capaian: { title: 'Capaian Pengunjung', subtitle: 'Analisis data pengunjung' },
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
        if (targetPage) {
            targetPage.classList.add('active');
        }

        const titleData = pageTitles[page] || pageTitles.dashboard;
        document.getElementById('pageTitle').textContent = titleData.title;
        document.getElementById('pageSubtitle').textContent = titleData.subtitle;

        // Tutup sidebar di HP
        if (window.innerWidth <= 768) {
            closeSidebar();
        }

        // Refresh halaman
        if (page === 'capaian') {
            setTimeout(() => {
                initBarChartFull(currentPeriodFull || 'monthly');
                initPieChartFull();
                renderCapaianTable();
            }, 100);
        }
        if (page === 'kalender') {
            renderCalendarFull(currentMonthFull || new Date().getMonth(), currentYearFull || new Date().getFullYear());
        }
        if (page === 'jadwal') {
            renderJadwalFull();
        }
        if (page === 'laporan') {
            setTimeout(() => {
                generateLaporan();
            }, 100);
        }
    });
});

// ============================================
// TAMBAH / HAPUS JADWAL
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

    const newId = jadwalData.length > 0 ? Math.max(...jadwalData.map(j => j.id)) + 1 : 1;
    jadwalData.push({ id: newId, kegiatan, waktu, ruangan, tempat, pic });

    renderJadwal();
    renderJadwalFull();
    updateStats();
    alert('✅ Jadwal berhasil ditambahkan!');
}

function hapusJadwal(id) {
    if (confirm('Yakin ingin menghapus jadwal ini?')) {
        jadwalData = jadwalData.filter(j => j.id !== id);
        renderJadwal();
        renderJadwalFull();
        updateStats();
        alert('✅ Jadwal berhasil dihapus!');
    }
}

// ============================================
// RENDER JADWAL
// ============================================
function renderJadwal() {
    const tbody = document.getElementById('jadwalTableBody');
    tbody.innerHTML = jadwalData.slice(0, 5).map(item => `
        <tr>
            <td>${item.id}</td>
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
    tbody.innerHTML = jadwalData.map(item => `
        <tr>
            <td>${item.id}</td>
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

// ============================================
// PRINT JADWAL
// ============================================
function printJadwal() {
    const now = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('printDate').textContent = now.toLocaleDateString('id-ID', options);
    window.print();
}

// ============================================
// KALENDER
// ============================================
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
    const grid = document.getElementById('calendarGrid');
    const monthYear = document.getElementById('monthYear');
    renderCalendarGrid(grid, monthYear, month, year);
}

function renderCalendarGrid(grid, monthYearEl, month, year) {
    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    monthYearEl.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = '';
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    dayNames.forEach(name => {
        html += `<div class="day-name">${name}</div>`;
    });

    for (let i = 0; i < firstDay; i++) {
        html += `<div class="day empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const hasEvent = eventDates.includes(d);
        const className = hasEvent ? 'day has-event' : 'day no-event';
        html += `<div class="${className}">${d}</div>`;
    }

    grid.innerHTML = html;
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

    let html = '';
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    dayNames.forEach(name => {
        html += `<div class="day-name">${name}</div>`;
    });

    for (let i = 0; i < firstDay; i++) {
        html += `<div class="day empty"></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const hasEvent = eventDates.includes(d);
        const className = hasEvent ? 'day has-event' : 'day no-event';
        html += `<div class="${className}" onclick="showEventDetail(${d}, '${monthNames[month]} ${year}')">${d}</div>`;
    }

    grid.innerHTML = html;
}

function showEventDetail(tanggal, bulan) {
    const container = document.getElementById('eventListFull');
    const kegiatan = jadwalData.filter(j => eventDates.includes(tanggal));

    if (kegiatan.length > 0) {
        container.innerHTML = kegiatan.map(k => `
            <div style="padding:8px 12px;background:#fff;border-radius:8px;margin-bottom:6px;border-left:4px solid #1a237e;">
                <strong>${k.kegiatan}</strong> - ${k.waktu} (${k.ruangan}) - PIC: ${k.pic}
            </div>
        `).join('');
    } else {
        container.innerHTML = `<p style="color:#888;">Tidak ada kegiatan pada tanggal ${tanggal} ${bulan}</p>`;
    }
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
// STATISTIK
// ============================================
function updateStats() {
    document.getElementById('totalKegiatan').textContent = jadwalData.length;
    const picSet = new Set(jadwalData.map(item => item.pic));
    document.getElementById('totalPic').textContent = picSet.size;
    const bulanIni = new Date().getMonth();
    document.getElementById('totalPengunjung').textContent = monthlyData.values[bulanIni] || 0;

    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('hariIni').textContent = now.toLocaleDateString('id-ID', options);
}

// ============================================
// GRAFIK BATANG (Dashboard)
// ============================================
let barChartInstance = null;
let currentPeriod = 'monthly';

function initBarChart(period) {
    const ctx = document.getElementById('barChart').getContext('2d');
    if (barChartInstance) barChartInstance.destroy();

    const data = period === 'monthly' ? monthlyData : yearlyData;
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

// ============================================
// GRAFIK BATANG FULL (Capaian)
// ============================================
let barChartFullInstance = null;
let currentPeriodFull = 'monthly';

function initBarChartFull(period) {
    const ctx = document.getElementById('barChartFull').getContext('2d');
    if (barChartFullInstance) barChartFullInstance.destroy();

    const data = period === 'monthly' ? monthlyData : yearlyData;
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

// ============================================
// FILTER BUTTON
// ============================================
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
// GRAFIK PIE
// ============================================
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

// ============================================
// TABEL CAPAIAN
// ============================================
function renderCapaianTable() {
    const tbody = document.getElementById('capaianTableBody');
    const target = 200;

    tbody.innerHTML = monthlyData.labels.map((bulan, i) => {
        const value = monthlyData.values[i];
        const persentase = Math.round((value / target) * 100);
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
                <td><strong>${bulan}</strong></td>
                <td>${value}</td>
                <td>${target}</td>
                <td>${persentase}%</td>
                <td><span class="${statusClass}">${status}</span></td>
            </tr>
        `;
    }).join('');
}

// ============================================
// HALAMAN LAPORAN
// ============================================
let barChartLaporanInstance = null;
let pieChartLaporanInstance = null;
let currentLaporanPeriod = 'monthly';

function toggleDateRange() {
    const periode = document.getElementById('laporanPeriode').value;
    const dateRange = document.getElementById('dateRangeGroup');
    if (periode === 'custom') {
        dateRange.style.display = 'flex';
        dateRange.style.flexDirection = 'row';
        dateRange.style.alignItems = 'end';
        dateRange.style.gap = '4px';
    } else {
        dateRange.style.display = 'none';
    }
}

function generateLaporan() {
    const jenis = document.getElementById('laporanJenis').value;
    const periode = document.getElementById('laporanPeriode').value;

    let dataJadwal = [...jadwalData];
    let dataCapaian = [...monthlyData.values];

    document.getElementById('lapTotalKegiatan').textContent = dataJadwal.length;
    const picSet = new Set(dataJadwal.map(item => item.pic));
    document.getElementById('lapTotalPic').textContent = picSet.size;

    const totalPengunjung = dataCapaian.reduce((a, b) => a + b, 0);
    document.getElementById('lapTotalPengunjung').textContent = totalPengunjung;

    const bulanNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let periodeText = '';
    const now = new Date();
    switch (periode) {
        case 'bulan_ini':
            periodeText = `${bulanNames[now.getMonth()]} ${now.getFullYear()}`;
            break;
        case 'bulan_lalu':
            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);
            periodeText = `${bulanNames[lastMonth.getMonth()]} ${lastMonth.getFullYear()}`;
            break;
        case 'tahun_ini':
            periodeText = `Tahun ${now.getFullYear()}`;
            break;
        case 'custom':
            const tglMulai = document.getElementById('tglMulai').value;
            const tglSelesai = document.getElementById('tglSelesai').value;
            periodeText = `${tglMulai} s/d ${tglSelesai}`;
            break;
        default:
            periodeText = 'Semua Periode';
    }
    document.getElementById('lapPeriode').textContent = periodeText;
    document.getElementById('lapTanggalCetak').textContent = new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const jenisText = document.getElementById('laporanJenis').options[document.getElementById('laporanJenis').selectedIndex].text;
    document.getElementById('lapJenisLaporan').textContent = jenisText;

    renderLaporanTable(dataJadwal, jenis);
    initBarChartLaporan(currentLaporanPeriod);
    initPieChartLaporan();

    document.getElementById('lapJumlahData').textContent = `${dataJadwal.length} Data`;
    document.getElementById('lapStatus').textContent = '✅ Siap';
    document.getElementById('lapStatus').style.background = '#4caf50';
    document.getElementById('lapStatus').style.color = '#fff';
}

function renderLaporanTable(data, jenis) {
    const tbody = document.getElementById('laporanTableBody');
    const thead = document.getElementById('laporanThead');

    let headers = [];
    let rows = [];

    if (jenis === 'all' || jenis === 'jadwal') {
        headers = ['No', 'Kegiatan', 'Waktu', 'Ruangan', 'Tempat', 'PIC', 'Pengunjung'];
        rows = data.map((item, index) => ({
            no: index + 1,
            kegiatan: item.kegiatan,
            waktu: item.waktu,
            ruangan: item.ruangan,
            tempat: item.tempat,
            pic: item.pic,
            pengunjung: Math.floor(Math.random() * 50) + 10
        }));
    } else if (jenis === 'capaian') {
        headers = ['Bulan', 'Jumlah Pengunjung', 'Target', 'Pencapaian', 'Status'];
        rows = monthlyData.labels.map((bulan, i) => ({
            bulan: bulan,
            pengunjung: monthlyData.values[i],
            target: 200,
            pencapaian: `${Math.round((monthlyData.values[i] / 200) * 100)}%`,
            status: monthlyData.values[i] >= 200 ? '✅ Tercapai' : '⚠️ Belum'
        }));
    } else if (jenis === 'kalender') {
        headers = ['Tanggal', 'Kegiatan', 'Waktu', 'Ruangan', 'Tempat', 'PIC'];
        rows = eventDates.map((date, i) => ({
            tanggal: date,
            kegiatan: data[i % data.length]?.kegiatan || 'Kegiatan ' + (i + 1),
            waktu: data[i % data.length]?.waktu || '08:00 - 09:00',
            ruangan: data[i % data.length]?.ruangan || 'R. ' + (i + 1),
            tempat: data[i % data.length]?.tempat || 'Gedung ' + (i + 1),
            pic: data[i % data.length]?.pic || 'PIC ' + (i + 1)
        }));
    }

    let headerHtml = '<tr>';
    headers.forEach(h => {
        headerHtml += `<th>${h}</th>`;
    });
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

    const data = period === 'monthly' ? monthlyData : yearlyData;
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
        if (btn.dataset.period === period) {
            btn.classList.add('active');
        }
    });
    initBarChartLaporan(period);
}

// ============================================
// EXPORT
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
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('id-ID', options);
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderJadwal();
    renderJadwalFull();
    renderCalendar(currentMonth, currentYear);
    renderCalendarFull(currentMonthFull, currentYearFull);
    updateStats();
    setCurrentDate();
    initBarChart('monthly');
    initPieChart();
    initBarChartFull('monthly');
    initPieChartFull();
    renderCapaianTable();
    generateLaporan();

    // Sidebar awal di HP tertutup
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').style.transform = 'translateX(-100%)';
    }
});

// Reset sidebar saat resize
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const hamburger = document.getElementById('hamburgerBtn');

    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
        sidebar.style.transform = '';
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
    } else {
        if (!sidebar.classList.contains('open')) {
            sidebar.style.transform = 'translateX(-100%)';
        }
    }
});
