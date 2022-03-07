import Styled from './style';
import { TopNavDetail } from 'components/ui/top-nav';
import Image from 'next/image';
import Box from '@mui/material/Box';

const HeaderImage = '/assets/img/kebijakan-privasi.jpg';

const KebijakanPrivasiContainer = () => {
  return (
    <>
      <TopNavDetail title="Kebijakan Privasi" />
      <Box sx={{ width: '100%', height: '240px', position: 'relative' }}>
        <Image src={HeaderImage} alt="header image" layout="fill" />
      </Box>
      <Styled.Container>
        <Styled.ListTitle id="pendahuluan">1. Pendahuluan</Styled.ListTitle>
        <Styled.List>
          <Styled.NumberList>1.1</Styled.NumberList>
          <Styled.ListContent>
            Adanya Kebijakan Privasi ini adalah komitmen nyata dari Awal Mula
            untuk menghargai dan melindungi setiap data pribadi Pengguna situs
            awalmula.co.id (situs Awal Mula).
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>1.2</Styled.NumberList>
          <Styled.ListContent>
            Data Pribadi adalah data perseorangan tertentu yang disimpan,
            dirawat, dan dijaga kebenaran serta dilindungi kerahasiaannya.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>1.3</Styled.NumberList>
          <Styled.ListContent>
            Data Perseorangan Tertentu adalah setiap keterangan yang benar dan
            nyata yang melekat dan dapat diidentifikasi, baik langsung maupun
            tidak langsung, pada masing-masing individu yang pemanfaatannya
            sesuai ketentuan peraturan perundang-undangan.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>1.4</Styled.NumberList>
          <Styled.ListContent>
            Persetujuan Pemilik Data Pribadi yang selanjutnya disebut
            Persetujuan adalah pernyataan secara tertulis baik secara manual
            dan/atau elektronik yang diberikan oleh Pemilik Data Pribadi setelah
            mendapat penjelasan secara lengkap mengenai tindakan perolehan,
            pengumpulan, pengolahan, penganalisisan, penyimpanan, penampilan,
            pengumuman, pengiriman, dan penyebarluasan serta kerahasiaan atau
            ketidakrahasiaan Data Pribadi.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>1.5</Styled.NumberList>
          <Styled.ListContent>
            Kebijakan ini (beserta syarat-syarat penggunaan dari situs Awal Mula
            sebagaimana tercantum dalam &quot;Syarat & Ketentuan&quot; dan
            dokumen lain yang tercantum di situs awalmula.co.id) menetapkan
            dasar atas segala data pribadi yang Pengguna berikan kepada Awal
            Mula atau yang Awal Mula kumpulkan dari Pengguna, kemudian akan
            diproses oleh Awal Mula dari mulai saat Pengguna melakukan
            pendaftaran, mengakses dan menggunakan layanan Awal Mula. Harap
            memperhatikan ketentuan di bawah ini secara seksama untuk memahami
            pandangan dan kebiasaan Awal Mula berkenaan dengan cara Awal Mula
            dalam memperlakukan informasi tersebut.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>1.6</Styled.NumberList>
          <Styled.ListContent>
            Kebijakan Privasi ini dapat diubah dan/atau diperbaharui dari waktu
            ke waktu tanpa pemberitahuan sebelumnya. Awal Mula menyarankan agar
            Pengguna membaca secara seksama dan memeriksa halaman Kebijakan
            Privasi ini dari waktu ke waktu untuk mengetahui perubahan apapun.
            Dengan tetap mengakses dan menggunakan layanan Awal Mula, maka
            Pengguna dianggap menyetujui perubahan-perubahan dalam Kebijakan
            Privasi ini.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>1.7</Styled.NumberList>
          <Styled.ListContent>
            Dengan mengakses dan menggunakan layanan situs awalmula.co.id,
            Pengguna dianggap telah membaca, memahami dan memberikan
            persetujuannya terhadap pengumpulan dan penggunaan data pribadi
            Pengguna sebagaimana diuraikan di bawah ini.
          </Styled.ListContent>
        </Styled.List>
        <Box sx={{ margin: '24px 0' }}>
          <Styled.MenuLink href="#pendahuluan">1. Pendahuluan</Styled.MenuLink>
          <Styled.MenuLink href="#informasi-data-pengguna">
            2. Informasi Data Pengguna
          </Styled.MenuLink>
          <Styled.MenuLink href="#penggunaan-informasi">
            3. Penggunaan Informasi Atas Data pengguna
          </Styled.MenuLink>
          <Styled.MenuLink href="#pengungkapan-informasi">
            4. Pengungkapan Informasi Data Pengguna
          </Styled.MenuLink>
          <Styled.MenuLink href="#cookies">5. Cookies</Styled.MenuLink>
          <Styled.MenuLink href="#ketidakberlakuan">
            6. Ketidakberlakuan
          </Styled.MenuLink>
          <Styled.MenuLink href="#kritik-dan-saran">
            7. Kritik & Saran
          </Styled.MenuLink>
        </Box>
        <Styled.ListTitle id="informasi-data-pengguna">
          2. Informasi Data Pengguna
        </Styled.ListTitle>
        <Styled.List>
          <Styled.NumberList>2.1</Styled.NumberList>
          <Styled.ListContent>
            Awal Mula mengumpulkan informasi Pengguna dengan tujuan untuk
            memperoses dan memperlancar proses penggunaan situs awalmula.co.id.
            Tindakan tersebut telah memperoleh persetujuan Pengguna pada saat
            pengumpulan informasi.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>2.2</Styled.NumberList>
          <Styled.ListContent>
            Awal Mula mengumpulkan informasi pribadi sewaktu Pengguna mendaftar
            ke Awal Mula, sewaktu Pengguna menggunakan layanan Awal Mula,
            sewaktu Pengguna mengunjungi halaman Awal Mula atau halaman-halaman
            para mitra tertentu dari Awal Mula, dan sewaktu Anda menghubungi
            Awal Mula. Awal Mula dapat menggabung informasi mengenai Pengguna
            yang kami miliki dengan informasi yang kami dapatkan dari para mitra
            usaha atau perusahaan - perusahaan lain.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>2.3</Styled.NumberList>
          <Styled.ListContent>
            Sewaktu Pengguna mendaftar untuk menjadi Pengguna Awal Mula, maka
            Awal Mula akan mengumpulkan data pribadi Pengguna, yakni nama
            lengkap, alamat e-mail, tempat dan tanggal lahir, nomor telepon yang
            dapat dihubungi, password dan informasi lainnya yang diperlukan.
            Dengan memberikan informasi/data tersebut, Pengguna memahami bahwa
            Awal Mula dapat meminta dan mendapatkan setiap informasi/data
            pribadi Pengguna untuk kesinambungan dan keamanan situs ini.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>2.4</Styled.NumberList>
          <Styled.ListContent>
            Awal Mula akan mengumpulkan dan mengolah keterangan lengkap mengenai
            transaksi atau penawaran atau hubungan finansial lainnya yang
            Pengguna laksanakan melalui situs Awal Mula dan mengenai pemenuhan
            pesanan Pengguna.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>2.5</Styled.NumberList>
          <Styled.ListContent>
            Awal Mula akan mengumpulkan dan mengolah data mengenai kunjungan
            Pengguna ke situs Awal Mula, termasuk namun tidak terbatas pada data
            lalu - lintas, data lokasi, weblog, tautan ataupun data komunikasi
            lainnya, apakah hal tersebut disyaratkan untuk tujuan penagihan atau
            lainnya, serta sumberdaya yang Pengguna akses.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>2.6</Styled.NumberList>
          <Styled.ListContent>
            Pada saat Pengguna menghubungi Awal Mula, maka Awal Mula menyimpan
            catatan mengenai korespondensi tersebut dan isi dari komunikasi
            antara Pengguna dan Awal Mula.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>2.7</Styled.NumberList>
          <Styled.ListContent>
            Awal Mula dengan sendirinya menerima dan mencatat informasi dari
            komputer dan browser Pengguna, termasuk alamat IP, informasi cookie
            Awal Mula, atribut piranti lunak dan piranti keras, serta halaman
            yang Pengguna minta.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>2.8</Styled.NumberList>
          <Styled.ListContent>
            Setiap informasi/data Pengguna yang disampaikan kepada Awal Mula
            dan/atau yang dikumpulkan oleh Awal Mula dilindungi dengan upaya
            sebaik mungkin oleh perangkat keamanan teruji, yang digunakan oleh
            Awal Mula secara elektronik.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>2.9</Styled.NumberList>
          <Styled.ListContent>
            Kerahasiaan kata sandi atau password merupakan tanggung jawab
            masing-masing Pengguna. Awal Mula tidak bertanggung jawab atas
            kerugian yang dapat ditimbulkan akibat kelalaian pengguna dalam
            menjaga kerahasiaan password-nya.
          </Styled.ListContent>
        </Styled.List>

        <Styled.ListTitle id="penggunaan-informasi">
          3. Penggunaan Informasi Atas Data Pengguna
        </Styled.ListTitle>
        <Styled.List>
          <Styled.NumberList>3.1</Styled.NumberList>
          <Styled.ListContent>
            Memungkinkan untuk mengadakan kegiatan pengembangan (termasuk,
            tetapi tidak terbatas pada, analisis data, survei, pengembangan
            produk dan/atau layanan) melalui email, surat, telepon, atau oun fax
            untuk menganalisis bagaimana Pengguna menggunakan layanan Awal Mula.
            Hal ini bertujuan untuk meningkatkan layanan atau produk Awal Mula
            dan/atau meningkatkan pengalaman Pengguna.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>3.2</Styled.NumberList>
          <Styled.ListContent>
            Memungkinkan audit dan survei untuk, antara lain, memvalidasi ukuran
            dan komposisi audiens sasaran, serta memahami pengalaman Pengguna
            dengan layanan Awal Mula.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>3.3</Styled.NumberList>
          <Styled.ListContent>
            Dalam menjalankan bisnis, Awal Mula akan/mungkin perlu untuk
            menggunakan, memroses, mengungkapkan, dan/atau mengalihkan data
            pribadi Pengguna kepada penyedia layanan pihak ketiga, afiliasi atau
            perusahaan terkait kami, dan/atau pihak ketiga lainnya, untuk satu
            atau lebih Tujuan yang disebutkan di atas. Penyedia layanan pihak
            ketiga, afiliasi atau perusahaan terkait dan/atau pihak ketiga
            lainnya tersebut akan mengolah data pribadi Pengguna atas nama Awal
            Mula atau pihak lainnya, untuk satu atau lebih Tujuan yang
            disebutkan di atas. Awal Mula akan berusaha keras untuk memastikan
            bahwa pihak ketiga dan afiliasi Awal Mula menjaga keamanan data
            pribadi Pengguna dari akses yang tidak sah, pengumpulan, penggunaan,
            pengungkapan, pemrosesan atau risiko serupa dan menyimpan data
            pribadi Pengguna hanya selama data pribadi Pengguna dibutuhkan untuk
            Tujuan yang telah disebutkan di atas. Data pribadi pengguna akan
            disimpan di dalam sistem elektronik selama paling singkat 5 (lima)
            tahun, bilamana data pribadi tersebut tidak digunakan maka akan
            dimusnahkan dan/atau perlakuan lainnya sesuai dengan peraturan
            perundang-undangan yang secara khusus mengatur untuk itu. Pihak
            ketiga tersebut termasuk, dengan tidak terbatas pada; anak
            perusahaan, afiliasi dan perusahaan terkait Awal Mula; penyedia
            layanan dan pihak ketiga lainnya yang Awal Mula gunakan untuk
            mendukung bisnis. Ini termasuk tetapi tidak terbatas pada
            pihak-pihak yang menyediakan layanan administratif atau lainnya
            kepada kami seperti, jasa pos, penyedia jasa logistik, penyedia jasa
            keuangan, perusahaan telekomunikasi, perusahaan teknologi informasi
            dan pusat data; otoritas pemerintah atau regulator yang memiliki
            yurisdiksi atas Awal Mula.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>3.3</Styled.NumberList>
          <Styled.ListContent>
            Situs awalmula.co.id memilki kemungkinan terhubung dengan
            situs-situs lain diluar situs Awal Mula, dengan demikian Pengguna
            menyadari dan memahami bahwa Awal Mula tidak turut bertanggung jawab
            terhadap kerahasiaan informasi Pengguna setelah Pengguna mengakses
            situs-situs tersebut dengan meninggalkan atau berada diluar situs
            Awal Mula.
          </Styled.ListContent>
        </Styled.List>

        <Styled.ListTitle id="pengungkapan-informasi">
          4. Pengungkapan Informasi Pengguna
        </Styled.ListTitle>
        <Styled.List>
          <Styled.NumberList>4.1</Styled.NumberList>
          <Styled.ListContent>
            Awal Mula menjamin tidak ada penjualan, pengalihan, distribusi atau
            meminjamkan informasi/data pribadi Pengguna kepada pihak ketiga
            lain, tanpa terdapat izin dari Pengguna. Kecuali dalam hal-hal
            sebagai berikut:
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>4.1.1</Styled.NumberList>
          <Styled.ListContent>
            Apabila Awal Mula secara keseluruhan atau sebagian assetnya
            diakuisisi atau merger dengan pihak ketiga, maka data pribadi yang
            dimiliki oleh pihak Awal Mula akan menjadi salah satu aset yang
            dialihkan atau digabung.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>4.1.2</Styled.NumberList>
          <Styled.ListContent>
            Apabila Awal Mula berkewajiban mengungkapkan dan/atau berbagi data
            pribadi Pengguna dalam upaya mematuhi kewajiban hukum dan/atau dalam
            upaya memberlakukan atau menerapkan syarat-syarat penggunaan Awal
            Mula sebagaimana tercantum dalam Syarat dan Ketentuan layanan Awal
            Mula dan/atau perikatan-perikatan lainnya antara Awal Mula dengan
            pihak ketiga, atau untuk melindungi hak, properti, atau keselamatan
            Awal Mula, pengguna Awal Mula, atau pihak lain. Dalam hal ini,
            termasuk pertukaran informasi dengan perusahaan dan organisasi lain
            untuk tujuan perlindungan Awal Mula beserta Pengguna-nya, termasuk
            namun tidak terbatas pada penipuan, kerugian finansial atau
            pengurangan resiko lainnya.
          </Styled.ListContent>
        </Styled.List>

        <Styled.ListTitle id="cookies">5. Cookies</Styled.ListTitle>
        <Styled.List>
          <Styled.NumberList>5.1</Styled.NumberList>
          <Styled.ListContent>
            Cookies adalah file kecil yang secara otomatis akan mengambil tempat
            di dalam perangkat komputer Pengguna, untuk mengidentifikasi dan
            memantau koneksi jaringan Pengguna, sehingga memungkinkan Pengguna
            untuk mengakses layanan dari situs Awal Mula secara optimal.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>5.2</Styled.NumberList>
          <Styled.ListContent>
            Cookies tersebut tidak diperuntukkan untuk digunakan pada saat
            melakukan akses informasi/data lain yang Pengguna miliki di
            perangkat komputer Pengguna, selain dari yang telah Pengguna setujui
            untuk disampaikan.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>5.3</Styled.NumberList>
          <Styled.ListContent>
            Walaupun secara otomatis perangkat komputer Pengguna akan menerima
            cookies, Pengguna dapat menentukan pilihan untuk melakukan
            modifikasi melalui pengaturan/setting browser Pengguna yaitu dengan
            memilih untuk menolak cookies (pilihan ini dapat membatasi layanan
            optimal pada saat melakukan akses ke situs awalmula.co.id).
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>5.4</Styled.NumberList>
          <Styled.ListContent>
            Awal Mula telah menggunakan fitur Google Analytics Demographics and
            Interest. Data yang kami peroleh dari fitur tersebut, seperti umur,
            jenis kelamin dan minat Pengguna, akan kami gunakan untuk
            pengembangan situs dan konten Awal Mula. Jika tidak ingin data Anda
            terlacak oleh Google Analytics, Anda dapat menggunakan Add-On Google
            Analytics Opt-Out Browser.
          </Styled.ListContent>
        </Styled.List>
        <Styled.List>
          <Styled.NumberList>5.5</Styled.NumberList>
          <Styled.ListContent>
            Awal Mula dapat dan berhak menggunakan fitur-fitur yang disediakan
            oleh pihak ketiga dalam rangka meningkatkan layanan dan konten Awal
            Mula, termasuk diantaranya ialah penyesuaian iklan kepada setiap
            Pengguna berdasarkan minat atau riwayat kunjungan.
          </Styled.ListContent>
        </Styled.List>
        <Styled.ListTitle id="ketidakberlakuan">
          6. KetidakBerlakuan
        </Styled.ListTitle>
        <Styled.List>
          <Styled.NumberList>6.1</Styled.NumberList>
          <Styled.ListContent>
            Apabila terdapat ketentuan dalam Kebijakan Privasi ini yang
            ditetapkan oleh suatu badan peradilan menjadi tidak berlaku, batal
            atau tidak dapat dilaksanakan, ketentuan tersebut harus dilaksanakan
            sampai seluas - luasnya yang diperbolehkan oleh hukum sesuai dengan
            perwujudan keinginan dari para pihak, dan keberlakuan serta dapat
            dilaksanakannya ketentuan yang lain dari Kebijakan Privasi ini tidak
            dapat dalam cara apapun terpengaruh, dihalangi atau menjadi tidak
            berlaku.
          </Styled.ListContent>
        </Styled.List>
        <Styled.ListTitle id="kritik-dan-saran">
          7. Kritik & Saran
        </Styled.ListTitle>
        <Styled.List>
          <Styled.NumberList>7.1</Styled.NumberList>
          <Styled.ListContent>
            Segala jenis kritik, saran, maupun keperluan lain dapat disampaikan
            melalui e-mail ke cs@awalmula.co.id
          </Styled.ListContent>
        </Styled.List>
      </Styled.Container>
    </>
  );
};
export default KebijakanPrivasiContainer;
