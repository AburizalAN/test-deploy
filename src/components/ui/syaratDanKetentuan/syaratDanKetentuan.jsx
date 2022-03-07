import { TopNavDetail } from 'components/ui/top-nav';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownCircle from 'components/icons/arrow-down-circle';
import Link from 'next/link';
import Styled from './style';

import { useState } from 'react';

const SyaratDanKetentuanComponent = () => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <TopNavDetail title="Syarat dan Ketentuan" />
      <Styled.Container>
        <Styled.Title>Syarat Dan Ketentuan</Styled.Title>
        <Styled.Text>
          Kawan Mula dan Mitra Mula, selamat datang di awalmula.co.id.
        </Styled.Text>
        <Styled.Text>
          Dokumen ini merupakan Perjanjian Penggunaan Layanan Situs
          awalmula.co.id (“Perjanjian”) antara Anda selaku pengguna situs
          awalmula.co.id dengan Kami / PT. ELING JANJI PERTAMA (“EJP”) sebagai
          pengelola situs awalmula.co.id.{' '}
        </Styled.Text>
        <Styled.Text>
          Sebelum menggunakan Layanan Situs awalmula.co.id, Anda diwajibkan
          untuk membaca, memahami dan menyetujui semua persyaratan dan ketentuan
          dibawah ini. Mohon untuk dapat membaca dengan hati-hati atas isi
          Perjanjian ini. Dengan melanjutkan penggunaan situs awalmula.co.id,
          maka Anda dinyatakan telah menyetujui untuk terikat dengan Perjanjian
          ini dengan EJP. Apabila Anda tidak menerima atau menyetujui sebagian
          dari isi Perjanjian, maka Anda tidak diperbolehkan untuk melanjutkan
          penggunaan situs awalmula.co.id.
        </Styled.Text>
        <Styled.Text>
          Berkaitan penggunaan situs awalmula.co.id, baik EJP maupun Anda
          dilindungi secara hukum berdasar peraturan tentang Informasi dan
          Transaksi Elektronik dan Hak Kekayaan Intelektual maupun berdasar
          Kitab Undang-Undang Hukum Perdata yang berlaku di Republik Indonesia.
        </Styled.Text>
        <Accordion
          sx={{ boxShadow: 'none' }}
          expanded={expanded === 'pendahuluan'}
          onChange={handleChange('pendahuluan')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="pendahuluanbh-content"
            id="pendahuluanbh-header"
          >
            <Styled.ListTitle>1. Pendahuluan</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.ListContent>
              Awal Mula dijalankan dengan tujuan mendukung pemenuhan ketentuan
              Pasal 12 PP Nomor 80 Tahun 2019 tentang Perdagangan Melalui Sistem
              Elektronik (PMSE); dimana Pelaku Usaha wajib membantu program
              Pemerintah untuk mengutamakan perdagangan Barang dan atau Jasa
              hasil produksi dalam negeri, meningkatkan daya saing Barang
              dan/atau Jasa hasil produksi dalam negeri dan menyediakan
              fasilitas ruang promosi Barang dan/atau Jasa hasil produksi dalam
              negeri.
            </Styled.ListContent>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'hak-cipta'}
          onChange={handleChange('hak-cipta')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="hak-ciptabh-content"
            id="hak-ciptabh-header"
          >
            <Styled.ListTitle>2. Hak Cipta / Copyright</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>2.1</Styled.NumberList>
              <Styled.ListContent>
                EJP dan/atau para pemberi lisensi adalah pemilik yang sah atas
                materi yang terdapat dalam situs awalmula.co.id, termasuk dan
                tidak terbatas pada merek dagang dan/atau hak kekayaan
                intelektual, piranti lunak, grafik, data, atau muatan lain
                darinya. Materi yang terdapat dalam situs ini dicantumkan dengan
                seizin dari pemilik materi yang bersangkutan dan oleh karenanya
                dilindungi oleh Undang-Undang RI No. 28 tahun 2014 tentang Hak
                Cipta.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>2.2</Styled.NumberList>
              <Styled.ListContent>
                Situs awalmula.co.id berisi materi informasi/data yang sah dan
                didaftarkan sesuai ketentuan yang berlaku, penyalahgunaan
                informasi/data yang telah terdaftar secara sah adalah
                pelanggaran hukum dan dapat dituntut menurut ketentuan
                perundang-undangan yang berlaku. Materi informasi/data dimaksud
                tidak terbatas pada trademark, desain, tampilan, antar muka, dan
                grafis.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>2.3</Styled.NumberList>
              <Styled.ListContent>
                Nama dan logo &#8221;Awal Mula&#8221; telah terdaftar secara
                resmi di Departemen Hukum dan Hak Asasi Manusia, Direktorat
                Jenderal Hak Cipta dan Hak Kekayaan Intelektual Republik
                Indonesia. Pihak lain dilarang oleh undang- undang untuk
                menggunakan atau mengatas-namakan dengan nama dan/atau logo
                &#8221;Awal Mula&#8221; untuk kepentingan pribadi dan kelompok
                tertentu tanpa kuasa tertulis yang diberikan khusus untuk itu,
                dengan atau tanpa sepengetahuan Awal Mula. Pelanggaran terhadap
                hal ini akan dikenai pasal pelanggaran hak cipta dan hak
                kekayaan intelektual.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>2.4</Styled.NumberList>
              <Styled.ListContent>
                Tindakan hukum akan dilakukan apabila ditemui tindakan
                percobaan, baik yang disengaja atau tidak disengaja, untuk
                mengubah, mengakses halaman situs awalmula.co.id secara paksa
                yang dibuat bukan untuk konsumsi publik, atau merusak situs Awal
                Mula dan/atau perangkat server yang termuat di dalamnya, tanpa
                izin khusus yang diberikan oleh pengelola resmi dan sah Awal
                Mula. intelektual.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>2.5</Styled.NumberList>
              <Styled.ListContent>
                Pengunjung dan/atau Pembeli tidak diperbolehkan mengambil data
                ataupun gambar dari situs awalmula.co.id tanpa persetujuan pihak
                Awal Mula.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>2.6</Styled.NumberList>
              <Styled.ListContent>
                Pengunjung dan/atau Pembeli tidak diperbolehkan menyalin,
                memperbanyak, menyebarluaskan, menjual, mengubah, menyalin,
                mengirimkan, menggandakan, menerbitkan, memberi izin terhadap
                semua materi yang diperoleh dari situs awalmula.co.id.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>2.7</Styled.NumberList>
              <Styled.ListContent>
                Pengunjung dan/atau Pembeli dapat menampilkan secara elektronik,
                menyalin, mengambil, dan mencetak dari materi yang terdapat di
                dalam situs awalmula.co.id ini untuk keperluan sendiri dan bukan
                untuk diperjualbelikan atau untuk kepentingan yang bersifat
                komersial.
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'hak-kewajiban'}
          onChange={handleChange('hak-kewajiban')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="hak-kewajibanbh-content"
            id="hak-kewajibanbh-header"
          >
            <Styled.ListTitle>
              3. Hak dan Kewajiban Pengunjung dan/atau Pembeli
            </Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>3.1</Styled.NumberList>
              <Styled.ListContent>
                Anda selaku Pengunjung dan/atau Pembeli berhak memperoleh
                produk/jasa sesuai spesifikasi yang telah dibayar penuh oleh
                Pengguna dan pembelian produk/jasa tidak dapat diretur atau
                dibatalkan secara sepihak diluar ketentuan mengenai retur atau
                pembatalan yang disepakati.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>3.2</Styled.NumberList>
              <Styled.ListContent>
                Anda selaku Pengunjung dan/atau Pembeli berhak memilih metode
                pembayaran yang disediakan di situs awalmula.co.id.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>3.3</Styled.NumberList>
              <Styled.ListContent>
                Anda selaku Pengunjung dan/atau Pembeli berkewajiban membayar
                penuh untuk transaksi yang dilakukan sesuai dengan ketentuan
                transaksi.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>3.4</Styled.NumberList>
              <Styled.ListContent>
                Anda selaku Pengunjung dan/atau Pembeli bertanggung jawab untuk
                penggunaan atau perbuatan yang dilakukan di situs
                awalmula.co.id.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>3.5</Styled.NumberList>
              <Styled.ListContent>
                Anda selaku Pengunjung dan/atau Pembeli menyetujui untuk
                membebaskan dan mengganti rugi EJP beserta afiliasi dari segala
                perbuatan yang dilakukan Pengguna yang melanggar hukum maupun
                ketentuan dalam Perjanjian.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>3.6</Styled.NumberList>
              <Styled.ListContent>
                Anda selaku Pengunjung dan/atau Pembeli dilarang melakukan
                kecurangan (fraud) dalam penggunaan situs awalmula.co.id yang
                merugikan EJP ataupun pihak ketiga.
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'transaksi-pembayaran'}
          onChange={handleChange('transaksi-pembayaran')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="transaksi-pembayaranbh-content"
            id="transaksi-pembayaranbh-header"
          >
            <Styled.ListTitle>4. Transaksi Pembayaran</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.Text>
              Semua pemesanan yang terjadi akan diperiksa oleh tim Awal Mula.
              Tim Awal Mula akan melakukan konfirmasi alamat dan bukti
              pembayaran dari Anda sebelum pesanan diproses. Beberapa hal yang
              perlu diperhatikan untuk transaksi yang telah dilakukan yaitu
              sebagai berikut:
            </Styled.Text>
            <Styled.List>
              <Styled.NumberList>4.1</Styled.NumberList>
              <Styled.ListContent>
                Harga dan pemesanan stok produk tidak mengikat kami, bila
                pemesan belum menyelesaikan transaksi pembelian dan melakukan
                pembayaran.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>4.2</Styled.NumberList>
              <Styled.ListContent>
                Pemesanan dan pengiriman hanya dapat dilakukan sebatas wilayah/
                kota-kota yang dilayani oleh jasa ekspedisi yang ditunjuk.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>4.3</Styled.NumberList>
              <Styled.ListContent>
                Apabila dianggap perlu kami dapat meminta pembeli untuk
                melampirkan fotokopi identitas.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>4.4</Styled.NumberList>
              <Styled.ListContent>
                Metode pembayaran yang berlaku dan sah mengikuti ketentuan
                Informasi Pembayaran Awal Mula (yaitu: Bank Transfer, Virtual
                Account, dan E-Wallet (QRIS, OVO, LinkAja, dan DANA). Metode
                pembayaran lain diluar pilihan tersebut berakibat tidak
                diakuinya transaksi oleh Kami.
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'refund-pembatalan'}
          onChange={handleChange('refund-pembatalan')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="refund-pembatalanbh-content"
            id="refund-pembatalanbh-header"
          >
            <Styled.ListTitle>
              5. Refund Dan Pembatalan Transaksi
            </Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>5.1</Styled.NumberList>
              <Styled.ListContent>
                Transaksi hanya dapat dibatalkan sebelum barang dikirim ke
                alamat Pembeli
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>5.2</Styled.NumberList>
              <Styled.ListContent>
                Pembatalan hanya dapat dilakukan dengan menghubungi layanan
                pelanggan kami.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>5.3</Styled.NumberList>
              <Styled.ListContent>
                Pengguna menyetujui jika terjadi ketidaksesuaian informasi dalam
                situs, maka Kami berhak dengan kebijakan mutlak untuk
                membatalkan transaksi atau tetap melanjutkan proses transaksi,
                dengan melakukan koreksi ketidaksesuaian informasi.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>5.4</Styled.NumberList>
              <Styled.ListContent>
                Kami berhak sepenuhnya menolak transaksi tanpa harus menyebutkan
                alasan yang jelas, dan bila Pembeli telah melakukan pembayaran
                maka nilai pembayaran akan dikembalikan secara penuh ke Pembeli.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>5.5</Styled.NumberList>
              <Styled.ListContent>
                Barang yang telah dikirimkan dengan alasan apapun tidak dapat
                dibatalkan atau ditukar selain berdasar Syarat dan Ketentuan
                ini.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>5.6</Styled.NumberList>
              <Styled.ListContent>
                Pembeli berhak mengajukan pengembalian produk kepada Awal Mula
                dalam waktu 3 (tiga) hari sejak status pengiriman dinyatakan
                berhasil oleh ekpedisi, jika produk yang diterima pembeli
                ternyata:
              </Styled.ListContent>
            </Styled.List>
            <Styled.List sx={{ marginTop: '8px' }}>
              <Styled.ListContent sx={{ marginRight: '12px' }}>
                5.6.1
              </Styled.ListContent>
              <Styled.ListContent>
                Terjadi kesalahan/ tidak sesuai pesanan (kecuali keluhan
                perubahan nama atau tampilan kemasan yang dikirimkan mungkin
                yang terbaru yang tidak ter-update pada produk detail
              </Styled.ListContent>
            </Styled.List>
            <Styled.List sx={{ marginTop: '8px' }}>
              <Styled.ListContent sx={{ marginRight: '12px' }}>
                5.6.2
              </Styled.ListContent>
              <Styled.ListContent>
                Kemasan rusak atau cacat yang mempengaruhi isi produk Pembeli
                harus mengirimkan email ke: cs@awalmula.co.id atau Whatsapp ke
                +62 811-3223-9709, yang berisi informasi berikut:
                <ul>
                  <li>Nomor Invoice</li>
                  <li>Nama Lengkap</li>
                  <li>Nomor Telepon</li>
                  <li>Detail keluhan terhadap produk yang diterima</li>
                  <li>Foto produk sebagai bukti keluhan</li>
                </ul>
                Awal Mula akan mempertimbangkan pengajuan penukaran dari pembeli
                dan juga kebijakan penukaran dari penjual maupun Awal Mula dan
                berhak memutuskan apakah pengajuan penukaran sah atau tidak,
                Jika ya, maka Penjual atau Awal Mula memiliki 2 (dua) pilihan
                untuk menyelesaikan protes dari Pembeli, yaitu:
                <ul>
                  <li>
                    Menukar produk yang sesuai dengan keinginan pembeli. Produk
                    yang diterima untuk kemudian yang ditukar (setelah
                    pertimbangan kronologi kasus dan pengecekan detail) adalah
                    produk dalam kondisi baru dan belum dibuka
                  </li>
                  <li>
                    Membatalkan transaksi dan uang dikembalikan kepada Pembeli
                    (dalam bentuk voucher, tidak dalam bentuk tunai)
                  </li>
                </ul>
                Untuk kedua pilihan diatas, Penjual dan Awal Mula dapat
                menentukan apakah produk yang sudah diterima pembeli perlu
                dikirim kembali ke Penjual atau Awal Mula, dengan
                mempertimbangkan:
                <ul>
                  <li>
                    Kondisi barang (sudah pecah/ rusak atau masih dalam kondisi
                    baik)
                  </li>
                  <li>Ongkos kirim jika dibandingkan dengan harga produk</li>
                  <li>Permintaan maaf kepada pembeli</li>
                </ul>
                Awal Mula dan Penjual juga akan mendiskusikan konsekuensi dari
                solusi, terutama berkaitan dengan:
                <ul>
                  <li>
                    Perlu tidaknya produk awal dikembalikan ke Penjual atau Awal
                    Mula dan jasa pengiriman yang akan digunakan
                  </li>
                  <li>
                    Penanggung ongkos kirim (untuk produk awal ke Penjual atau
                    Awal Mula dan untuk produk baru ke Pembeli) adalah Pembeli
                  </li>
                  <li>
                    Perkiraan waktu kapan produk akan dikirim Penjual atau Awal
                    Mula dan diterima Pembeli.
                  </li>
                </ul>
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'umum-content'}
          onChange={handleChange('umum-content')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="umumbh-content"
            id="umumbh-header"
          >
            <Styled.ListTitle>6. Umum</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>6.1</Styled.NumberList>
              <Styled.ListContent>
                Pengunjung dilarang memasang atau komentar yang berpotensi
                menimbulkan perselisihan, permusuhan, kebencian, dan sebagainya.
                Dilarang memasang gambar-gambar yang tidak senonoh (misalnya
                yang berbau pornografi atau berbau SARA), baik postingan, maupun
                signature. Dilarang melakukan black campaign dan flood message,
                jika Pengunjung melakukan black campaign dan/atau flood message
                maka keanggotaan Pengunjung akan diblokir dan ditutup.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>6.2</Styled.NumberList>
              <Styled.ListContent>
                Pengunjung tidak diperkenankan untuk melakukan posting iklan
                dalam bentuk apapun yang berisi informasi yang bersifat palsu,
                menyesatkan, atau mengandung virus komputer apapun di Situs
                awalmula.co.id ini. Dan juga, iklan yang dimasukkan tidak
                diperkenankan jika melibatkan/termasuk dalam kategori
                produk-produk dari perusahaan kompetitor dari awalmula.co.id.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>6.3</Styled.NumberList>
              <Styled.ListContent>
                Dilarang menggunakan Situs awalmula.co.id ini selain untuk
                keperluan yang telah ditetapkan, termasuk namun tidak terbatas
                pada modifikasi, penggandaan, penyebarluasan, penerbitan
                kembali, atau pengiriman isi dari Situs awalmula.co.id ini,
                tanpa ijin terlebih dahulu dari awalmula.co.id.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>6.4</Styled.NumberList>
              <Styled.ListContent>
                Dilarang keras untuk melanggar atau mencoba melanggar larangan
                keamanan dari Situs awalmula.co.id, termasuk namun tidak
                terbatas pada mencoba untuk menembus, memindai, atau menguji
                kerapuhan dari sistem atau jaringan atau mencoba untuk menembus
                keamanan atau ukuran yang bersifat otentik tanpa ijin resmi,
                mencoba untuk mengganggu layanan terhadap pengunjung manapun,
                induk ataupun jaringan atau mengirim email yang tidak diizinkan.
                Pelanggaran terhadap keamanan sistem ataupun jaringan dapat
                berakibat tuntutan hukum ataupun sipil.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>6.5</Styled.NumberList>
              <Styled.ListContent>
                Awal Mula atau pihak-pihak yang ditunjuk berhak untuk menutup
                semua atau setiap bagian dari Situs awalmula.co.id ini, dan
                berhak untuk merubah, memperbaiki atau memperbaharui keseluruhan
                atau sebagian isi Situs awalmula.co.id ini setiap saat tanpa
                pemberitahuan sebelumnya. Awal Mula atau pihak-pihak yang
                ditunjuk tidak bertanggung jawab atas semua kerusakan langsung,
                tidak langsung, sebagai akibat yang ditimbulkan atau berkaitan
                dengan pengaksesan, penggunaan atau unduh atas materi yang dalam
                Situs awalmula.co.id ini.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>6.6</Styled.NumberList>
              <Styled.ListContent>
                Awal Mula memiliki hak penuh untuk membatasi penggunaan layanan,
                termasuk pembatasan waktu penayangan konten di Situs
                awalmula.co.id, ukuran konten, pesan email atau konten dalam
                bentuk lainnya. Pengunjung mengakui bahwa awalmula.co.id tidak
                perlu memenuhi kewajiban kepada pihak manapun untuk perubahan,
                penghentian atau penundaan layanan.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>6.7</Styled.NumberList>
              <Styled.ListContent>
                Setiap pengunjung bertanggung jawab terhadap seluruh
                komunikasinya sendiri dan bertanggung jawab terhadap konsekuensi
                dari postingnya. Awal Mula tidak mewakili atau menjamin
                kejujuran, keakuratan, keandalan dari seluruh komunikasi yang
                dimasukkan oleh pengunjung lainnya atau mendukung pendapat
                apapun yang diberikan oleh pengunjung. Keterkaitan apapun oleh
                pengunjung dengan materi yang dimasukkan oleh pengunjung lainnya
                akan ditanggung langsung oleh pengunjung yang bersangkutan. Awal
                Mula memiliki hak untuk menyingkirkan pengunjung manapun dan
                mencegah kelanjutan aksesnya terhadap Situs awalmula.co.id,
                dalam waktu kapanpun karena sebab pelanggaran Situs
                awalmula.co.id atau pelanggaran hukum dan juga memiliki hak
                untuk menghapus materi yang melecehkan, ilegal, mengganggu, atau
                tidak layak.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>6.8</Styled.NumberList>
              <Styled.ListContent>
                Dalam menjelajahi Situs awalmula.co.id, memungkinkan pengunjung
                untuk mengakses situs lain di luar Situs awalmula.co.id. Awal
                Mula tidak bertanggung jawab atas semua kerusakan dan kerugian
                baik langsung ataupun tidak langsung, maupun atas kebenaran
                informasi dan isi di luar Situs awalmula.co.id tersebut.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>6.9</Styled.NumberList>
              <Styled.ListContent>
                Syarat dan Ketentuan ini berlaku sebagai Perjanjian yang
                mengikat bagi Pengunjung.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>6.10</Styled.NumberList>
              <Styled.ListContent>
                Dalam hal timbul masalah dalam suatu transaksi, Anda setuju
                untuk terlebih dahulu berkomunikasi dengan Awalmula untuk
                mencapai penyelesaian secara musyawarah mufakat dan Awalmula
                akan menggunakan upaya komersial yang wajar untuk memfasilitasi
                penyelesaian permasalahan. Apabila permasalahan tidak dapat
                diselesaikan secara musyawarah mufakat, maka Anda, Kawan Mula
                atau Mitra Mula dapat menyelesaikannya melalui Badan Arbitrase
                Nasional Indonesia (BANI) di Kota Surabaya.
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'data-pribadi'}
          onChange={handleChange('data-pribadi')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="data-pribadibh-content"
            id="data-pribadibh-header"
          >
            <Styled.ListTitle>7. Data Pribadi</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>7.1</Styled.NumberList>
              <Styled.ListContent>
                Data Pribadi adalah data perseorangan tertentu yang disimpan,
                dirawat, dan dijaga kebenaran serta dilindungi kerahasiaannya.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>7.2</Styled.NumberList>
              <Styled.ListContent>
                Data Perseorangan Tertentu adalah setiap keterangan yang benar
                dan nyata yang melekat dan dapat diidentifikasi, baik langsung
                maupun tidak langsung, pada masing-masing individu yang
                pemanfaatannya sesuai ketentuan peraturan perundang-undangan.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>7.3</Styled.NumberList>
              <Styled.ListContent>
                Persetujuan Pemilik Data Pribadi yang selanjutnya disebut
                Persetujuan adalah pernyataan secara tertulis baik secara manual
                dan/atau elektronik yang diberikan oleh Pemilik Data Pribadi
                setelah mendapat penjelasan secara lengkap mengenai tindakan
                perolehan, pengumpulan, pengolahan, penganalisisan, penyimpanan,
                penampilan, pengumuman, pengiriman, dan penyebarluasan serta
                kerahasiaan atau ketidakrahasiaan Data Pribadi.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>7.4</Styled.NumberList>
              <Styled.ListContent>
                Segala bentuk informasi yang pengunjung sampaikan kepada Awal
                Mula melalui Situs awalmula.co.id ini termasuk namun tidak
                terbatas saran, ide, komentar, gambar dan lain-lainnya menjadi
                hak milik dari Awal Mula dan Awal Mula berhak menggunakan
                informasi tersebut (kecuali data pribadi) tanpa harus memperoleh
                persetujuan telebih dahulu dan tanpa harus memberikan kompensasi
                kepada pengunjung atau pihak manapun.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>7.5</Styled.NumberList>
              <Styled.ListContent>
                Awal Mula tidak menjual, menyewakan, mengirimkan, atau
                mengungkapkan informasi data pribadi yang pengunjung kirimkan
                kepada pihak ketiga manapun tanpa persetujuan sebelumnya dari
                pengunjung. Data pribadi yang dimaksud adalah nama, alamat,
                nomor telepon/faksimili dan alamat email pengunjung. Awal Mula
                akan menggunakan data pribadi tersebut atas persetujuan
                pengunjung untuk pemberitahuan promosi, mengirimkan hadiah, dan
                pemberitahuan lain.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>7.6</Styled.NumberList>
              <Styled.ListContent>
                Data-data pribadi tersebut hanya diketahui oleh Awal Mula dan
                pihak-pihak yang ditunjuk untuk bisa mengakses data pribadi
                tersebut. Awal Mula dan pihak-pihak yang ditunjuk tesebut akan
                menggunakan data pribadi tersebut untuk mengelola promosi,
                menganalisis data, mengolah data, dan memberikan layanan kepada
                pengunjung. Pihak-pihak yang ditunjuk ini dilarang
                memberitahukan data pribadi tersebut kepada pihak ketiga
                manapun, dilarang menggunakan data pribadi tersebut untuk tujuan
                lain dan wajib menjaga kerahasiaan data pribadi tersebut.
                Seluruh data yang Awal Mula terima dianggap benar dan dikirimkan
                oleh pihak yang berwenang memberikan data tersebut.
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'penyerahan-materi'}
          onChange={handleChange('penyerahan-materi')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="penyerahan-materibh-content"
            id="penyerahan-materibh-header"
          >
            <Styled.ListTitle>8. Penyerahan Materi</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>8.1</Styled.NumberList>
              <Styled.ListContent>
                Pengunjung mengakui serta bertanggung jawab atas setiap materi
                yang pengunjung serahkan untuk Situs awalmula.co.id ini,
                termasuk legalitas, keaslian dan hak cipta atas setiap material
                tersebut.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>8.2</Styled.NumberList>
              <Styled.ListContent>
                Pengunjung dilarang untuk memasang (upload), menyebarluaskan,
                menulis pesan, menerbitkan melalui Situs awalmula.co.id ini
                setiap muatan yang memfitnah, mencemarkan nama baik, bersifat
                pornografi, menghina, merupakan perbuatan tidak menyenangkan,
                atau yang dapat menimbulkan atau mendorong tindak pidana,
                melanggar hak pihak lain.
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'disclaimer'}
          onChange={handleChange('disclaimer')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="disclaimerbh-content"
            id="disclaimerbh-header"
          >
            <Styled.ListTitle>9. Disclaimer</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>9.1</Styled.NumberList>
              <Styled.ListContent>
                Segala macam jenis informasi (khasiat, berita, testimoni,
                komentar) dalam situs ini merupakan informasi yang bersifat
                umum. Penting untuk diketahui bahwa informasi yang ada di situs
                ini tidak dapat digunakan sebagai dasar atau sebagai cara
                mendiagnosa kondisi kesehatan atau mengobati penyakit tertentu.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>9.2</Styled.NumberList>
              <Styled.ListContent>
                Awal Mula tidak bertanggung jawab atas ketidakakuratan informasi
                serta komentar dan testimoni yang di posting oleh pelanggan atau
                member.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>9.3</Styled.NumberList>
              <Styled.ListContent>
                Diharapkan kebijaksanaan dari pelanggan bahwa efek produk akan
                berbeda-beda untuk setiap orang tergantung beberapa faktor,
                seperti usia, jenis kelamin, pola hidup, metabolisme, faktor
                genetik, tingkat kesehatan, tipe kulit, dan lain-lain.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>9.4</Styled.NumberList>
              <Styled.ListContent>
                Awal Mula tidak bertanggung jawab atas dampak atau efek samping
                yang dialami oleh pelanggan pada saat menggunakan produk yang
                disebabkan oleh ketidakcocokan daya tahan tubuh ataupun kulit
                pelanggan. Namun kami bertanggung jawab penuh untuk ke-ASLI-an
                semua produk yang kami JUAL.
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'cara-belanja'}
          onChange={handleChange('cara-belanja')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="cara-belanjabh-content"
            id="cara-belanjabh-header"
          >
            <Styled.ListTitle>10. Cara Belanja Awalmula</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>10.1</Styled.NumberList>
              <Styled.ListContent>
                Masuk ke akun Awal Mula milikmu. Jika belum memiliki akun,
                daftar akun Awal Mula.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.2</Styled.NumberList>
              <Styled.ListContent>
                Ketik kata kunci produk dalam &#8216;Kolom Pencarian&#8217; atau
                pilih &#039;Kategori&#039; produk untuk pencarian produk yang
                kamu inginkan.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.3</Styled.NumberList>
              <Styled.ListContent>
                Pilih produk yang kamu inginkan dari hasil pencarian, kemudian
                klik &#8216;+ Keranjang&#8217;.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.4</Styled.NumberList>
              <Styled.ListContent>
                Apabila ingin mencari dan membeli produk lainnya juga,
                &#8216;Tambah ke Keranjang&#8217; barang yang telah kamu temukan
                dan lanjutkan berbelanja.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.5</Styled.NumberList>
              <Styled.ListContent>
                Klik tombol &#8216;Lihat Cart/Keranjang&#8217; dan klik tombol
                &#039;Lihat Semua&#039;.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.6</Styled.NumberList>
              <Styled.ListContent>
                Pastikan kembali produk beserta jumlah yang ingin dibeli.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.7</Styled.NumberList>
              <Styled.ListContent>
                &#039;Gunakan voucher&#039; [apabila tersedia].
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.8</Styled.NumberList>
              <Styled.ListContent>
                Klik &#039;Lanjutkan ke Pembayaran&#039;.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.9</Styled.NumberList>
              <Styled.ListContent>
                Isi data pengiriman selengkapnya.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.10</Styled.NumberList>
              <Styled.ListContent>
                &#039;Pilih Kurir Pengiriman&#039; yang tersedia lalu klik
                &#039;Berikutnya&#039;.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.11</Styled.NumberList>
              <Styled.ListContent>
                Pilih metode pembayaran yang diinginkan (yaitu: Bank Transfer,
                Virtual Account, dan E-Wallet (QRIS, OVO, LinkAja, dan DANA).
                Metode pembayaran lain diluar pilihan tersebut berakibat tidak
                diakuinya transaksi oleh Kami.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>10.12</Styled.NumberList>
              <Styled.ListContent>
                Klik &#039;Memesan&#039; dan ikuti instruksi pembayaran yang
                telah diberikan.
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'informasi-pembayaran'}
          onChange={handleChange('informasi-pembayaran')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="informasi-pembayaranbh-content"
            id="informasi-pembayaranbh-header"
          >
            <Styled.ListTitle>11. Informasi Pembayaran</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.ListContent>
                Kamu dapat memilih cara pembayaran transaksi di Awal Mula di
                antaranya melalui:
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>11.1</Styled.NumberList>
              <Styled.ListContent>
                Virtual Account
                <ul>
                  <li>BCA Virtual Account</li>
                  <li>BNI Virtual Account</li>
                </ul>
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>11.2</Styled.NumberList>
              <Styled.ListContent>
                Bank Transfer
                <ul>
                  <li>BCA</li>
                  <li>BNI</li>
                </ul>
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>11.3</Styled.NumberList>
              <Styled.ListContent>
                E-Wallet
                <ul>
                  <li>OVO</li>
                  <li>LinkAja</li>
                  <li>DANA</li>
                  <li>QRIS</li>
                </ul>
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'cara-pembayaran-va'}
          onChange={handleChange('cara-pembayaran-va')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="cara-pembayaran-vabh-content"
            id="cara-pembayaran-vabh-header"
          >
            <Styled.ListTitle>
              12. Cara Pembayaran melalui Virtual Account
            </Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>12.1</Styled.NumberList>
              <Styled.ListContent>
                Klik tombol &#8216;Lihat Cart/Keranjang&#8217; dan klik tombol
                &#039;Lihat Semua&#039;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>12.2</Styled.NumberList>
              <Styled.ListContent>
                Pastikan kembali produk beserta jumlah yang ingin dibeli
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>12.3</Styled.NumberList>
              <Styled.ListContent>
                &#039;Gunakan voucher&#039; [apabila tersedia]
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>12.4</Styled.NumberList>
              <Styled.ListContent>
                Klik &#039;Lanjutkan ke Pembayaran&#039;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>12.5</Styled.NumberList>
              <Styled.ListContent>
                Isi data pengiriman selengkapnya
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>12.6</Styled.NumberList>
              <Styled.ListContent>
                &#039;Pilih Kurir Pengiriman&#039; yang tersedia lalu klik
                &#039;Berikutnya&#039;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>12.7</Styled.NumberList>
              <Styled.ListContent>
                Pilih metode pembayaran &#8216;Transfer Melalui Virtual
                Account&#8217;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>12.8</Styled.NumberList>
              <Styled.ListContent>
                Pilih BCA Virtual Account/BNI Virtual Account
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>12.9</Styled.NumberList>
              <Styled.ListContent>
                Klik &#039;Memesan&#039; dan ikuti instruksi pembayaran yang
                telah diberikan
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'cara-pembayaran-transfer'}
          onChange={handleChange('cara-pembayaran-transfer')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="cara-pembayaran-transferbh-content"
            id="cara-pembayaran-transferbh-header"
          >
            <Styled.ListTitle>
              13. Cara Pembayaran melalui Transfer Bank
            </Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>13.1</Styled.NumberList>
              <Styled.ListContent>
                Klik tombol &#8216;Lihat Cart/Keranjang&#8217; dan klik tombol
                &#039;Lihat Semua&#039;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.2</Styled.NumberList>
              <Styled.ListContent>
                Pastikan kembali produk beserta jumlah yang ingin dibeli
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.3</Styled.NumberList>
              <Styled.ListContent>
                &#039;Gunakan voucher&#039; [apabila tersedia]
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.4</Styled.NumberList>
              <Styled.ListContent>
                Klik &#039;Lanjutkan ke Pembayaran&#039;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.5</Styled.NumberList>
              <Styled.ListContent>
                Isi data pengiriman selengkapnya
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.6</Styled.NumberList>
              <Styled.ListContent>
                &#039;Pilih Kurir Pengiriman&#039; yang tersedia lalu klik
                &#039;Berikutnya&#039;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.7</Styled.NumberList>
              <Styled.ListContent>
                Pilih metode pembayaran &#8216;Transfer Bank (verifikasi
                manual)&#8217;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.8</Styled.NumberList>
              <Styled.ListContent>
                Pilih Bank Transfer Payment
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.9</Styled.NumberList>
              <Styled.ListContent>Klik &#039;Memesan&#039;</Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.10</Styled.NumberList>
              <Styled.ListContent>
                Mohon selesaikan pembayaran ke nomor rekening A/n PT Eling Janji
                Pertama:
                <ul>
                  <li>BCA 8640645777</li>
                  <li>BNI 8938889993</li>
                </ul>
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.11</Styled.NumberList>
              <Styled.ListContent>
                Setelah melakukan pembayaran, klik &#8216;Konfirmasi
                Pembayaran&#8217;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.12</Styled.NumberList>
              <Styled.ListContent>
                Isi data yang diperlukan beserta unggah bukti transfer (.jpg,
                .jpeg, .png, and .pdf.)
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>13.13</Styled.NumberList>
              <Styled.ListContent>
                Klik Konfirmasi Pembayaran
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'cara-pembayaran-ewallet'}
          onChange={handleChange('cara-pembayaran-ewallet')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="cara-pembayaran-ewallet-content"
            id="cara-pembayaran-ewallet-header"
          >
            <Styled.ListTitle>
              14. Cara Pembayaran melalui Virtual Account E-wallet
            </Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>14.1</Styled.NumberList>
              <Styled.ListContent>
                Klik tombol &#8216;Lihat Cart/Keranjang&#8217; dan klik tombol
                &#039;Lihat Semua&#039;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>14.2</Styled.NumberList>
              <Styled.ListContent>
                Pastikan kembali produk beserta jumlah yang ingin dibeli
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>14.3</Styled.NumberList>
              <Styled.ListContent>
                &#039;Gunakan voucher&#039; [apabila tersedia]
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>14.4</Styled.NumberList>
              <Styled.ListContent>
                Klik &#039;Lanjutkan ke Pembayaran&#039;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>14.5</Styled.NumberList>
              <Styled.ListContent>
                Isi data pengiriman selengkapnya
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>14.6</Styled.NumberList>
              <Styled.ListContent>
                &#039;Pilih Kurir Pengiriman&#039; yang tersedia lalu klik
                &#039;Berikutnya&#039;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>14.7</Styled.NumberList>
              <Styled.ListContent>
                Pilih &#039;Metode Pembayaran&#039; E-wallet (pilih antara OVO,
                LinkAja, DANA, & QRIS)
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>14.8</Styled.NumberList>
              <Styled.ListContent>
                Klik &#039;Memesan&#039; dan ikuti instruksi pembayaran yang
                telah diberikan
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'informasi-pengiriman'}
          onChange={handleChange('informasi-pengiriman')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="informasi-pengirimanbh-content"
            id="informasi-pengirimanbh-header"
          >
            <Styled.ListTitle>15. Informasi Pengiriman</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>15.1</Styled.NumberList>
              <Styled.ListContent>
                Produk yang sudah di pesan akan dikirimkan menggunakan jasa
                pengiriman:
                <ul>
                  <li>AnterAja</li>
                  <li>JET Express</li>
                  <li>J&T</li>
                  <li>SICEPAT</li>
                </ul>
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>15.2</Styled.NumberList>
              <Styled.ListContent>
                Pengiriman barang dilakukan segera setelah kamu melakukan
                pembayaran.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>15.3</Styled.NumberList>
              <Styled.ListContent>
                Setelah menerima konfirmasi pembayaran, kamu akan menerima email
                notifikasi bahwa barang telah dikirimkan, disertai dengan resi
                pengiriman sehingga dapat dilakukan pelacakan.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>15.4</Styled.NumberList>
              <Styled.ListContent>
                Lama waktu pengiriman barang ialah sekitar 1-3 hari kerja,
                bergantung pada lokasi Anda.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>15.5</Styled.NumberList>
              <Styled.ListContent>
                Besaran ongkos kirim bergantung pada lokasimu. Kamu juga bisa
                dapatkan gratis ongkos kirim melalui, voucher, kode promo, dan
                tiering membership Awal Mula.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>15.6</Styled.NumberList>
              <Styled.ListContent>
                Apabila ingin memastikan status pesanan, klik akun Awal Mula
                milikmu.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>15.7</Styled.NumberList>
              <Styled.ListContent>
                Pilih &#8216;Status pembelian&#8217; dan kemudian pilih
                &#8216;Pesanan Dikirim&#8217;
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>15.8</Styled.NumberList>
              <Styled.ListContent>
                Klik &#8216;Lacak&#8217; pada produk yang kamu ingin ketahui
                status pengirimannya dan akan muncul informasi pengiriman
                produk.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>15.9</Styled.NumberList>
              <Styled.ListContent>
                Jasa pengiriman Awal Mula mencakup area seluruh Indonesia. Mohon
                maaf, Awal Mula belum melayani pengiriman keluar negeri.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>15.10</Styled.NumberList>
              <Styled.ListContent>
                Apabila pesanan belum sampai melampui perkiraan waktu yang
                ditentukan, silahkan hubungi{' '}
                <Link href="mailto:cs@awalmula.co.id">cs@awalmula.co.id.</Link>
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'informasi-pengembalian'}
          onChange={handleChange('informasi-pengembalian')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="informasi-pengembalianbh-content"
            id="informasi-pengembalianbh-header"
          >
            <Styled.ListTitle>
              16. Informasi Pengembalian Barang & Dana
            </Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.Text>
              Apabila pesanan rusak dan pecah dikarenakan oleh pengiriman,
              segera foto pesanan yang pecah atau rusak, kemudian ajukan
              permintaan pengembalian barang ke Awal Mula.
            </Styled.Text>
            <Styled.List>
              <Styled.NumberList>16.1</Styled.NumberList>
              <Styled.ListContent>
                Kemasan rusak atau cacat yang mempengaruhi isi produk Pembeli
                harus mengirimkan email ke : cs@awalmula.co.id atau Whatsapp ke
                +62 811-3223-9709, yang berisi informasi berikut:
                <ul>
                  <li>Nomor Invoice</li>
                  <li>Nama Lengkap</li>
                  <li>Nomor Telephone</li>
                  <li>Detail keluhan terhadap produk yang diterima</li>
                  <li>Foto produk sebagai bukti keluhan</li>
                </ul>
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>16.2</Styled.NumberList>
              <Styled.ListContent>
                Awal Mula akan mempertimbangkan pengajuan penukaran dari Pembeli
                dan berhak memutuskan apakah pengajuan penukaran sah atau tidak.
                Jika ya, maka Awal Mula memiliki 2 pilihan untuk menyelesaikan
                pengaduan dari Pembeli yaitu:
                <ul>
                  <li>Menukar produk yang sesuai dengan keinginan Pembeli</li>
                  <li>
                    Melakukan pengembalian/refund berupa Poin pada website Awal
                    Mula
                  </li>
                </ul>
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>16.3</Styled.NumberList>
              <Styled.ListContent>
                Awal Mula hanya menerima pengaduan kerusakan produk yang
                dilakukan dalam waktu 2 x 24 jam sejak produk tiba di alamat
                pengiriman.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>16.4</Styled.NumberList>
              <Styled.ListContent>
                Apabila mengalami kendala pesanan karena hilang di jasa
                pengiriman, hubungi cs@awalmula.co.id.
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'pedoman-media'}
          onChange={handleChange('pedoman-media')}
        >
          <AccordionSummary
            sx={{ boxShadow: 'none', border: 'none' }}
            expandIcon={<ArrowDownCircle />}
            aria-controls="pedoman-mediabh-content"
            id="pedoman-mediabh-header"
          >
            <Styled.ListTitle>17. Pedoman Media Siber</Styled.ListTitle>
          </AccordionSummary>
          <AccordionDetails>
            <Styled.List>
              <Styled.NumberList>17.1</Styled.NumberList>
              <Styled.ListContent sx={{ fontWeight: 'bold' }}>
                Ruang Lingkup
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.ListContent sx={{ marginRight: '12px' }}>
                17.1.1
              </Styled.ListContent>
              <Styled.ListContent>
                Media Siber adalah segala bentuk media yang menggunakan wahana
                internet dan melaksanakan kegiatan jurnalistik, serta memenuhi
                persyaratan Undang-Undang Pers dan Standar Perusahaan Pers yang
                ditetapkan Dewan Pers.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.ListContent sx={{ marginRight: '12px' }}>
                17.1.2
              </Styled.ListContent>
              <Styled.ListContent>
                Isi Buatan Pengguna (User Generated Content) adalah segala isi
                yang dibuat dan atau dipublikasikan oleh pengguna media siber,
                antara lain, artikel, gambar, komentar, suara, video dan
                berbagai bentuk unggahan yang melekat pada media siber, seperti
                blog, forum, komentar pembaca atau pemirsa, dan bentuk lain.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>17.2</Styled.NumberList>
              <Styled.ListContent sx={{ fontWeight: 'bold' }}>
                Hak Cipta / Copyright
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.ListContent sx={{ marginRight: '12px' }}>
                17.2.1
              </Styled.ListContent>
              <Styled.ListContent>
                Media siber wajib menghormati hak cipta sebagaimana diatur dalam
                peraturan perundang-undangan yang berlaku.
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.NumberList>17.3</Styled.NumberList>
              <Styled.ListContent sx={{ fontWeight: 'bold' }}>
                Sengketa
              </Styled.ListContent>
            </Styled.List>
            <Styled.List>
              <Styled.ListContent sx={{ marginRight: '12px' }}>
                17.3.1
              </Styled.ListContent>
              <Styled.ListContent>
                Penilaian akhir atas sengketa untuk pelaksanaan Pedoman Media
                Siber ini diselesaikan oleh Dewan Pers Republik Indonesia.
              </Styled.ListContent>
            </Styled.List>
          </AccordionDetails>
        </Accordion>
      </Styled.Container>
    </>
  );
};

export default SyaratDanKetentuanComponent;
