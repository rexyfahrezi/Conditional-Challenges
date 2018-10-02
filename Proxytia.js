//author@rexyfahrezi
var nama = "Rexy"
var peran = "Penyihir"

if (nama.length <= 0  && peran.length <= 0) {
	console.log("Nama harus diisi!")
}
else if (nama.length >= 0  && peran >= 0) {
	console.log("Hallo "+nama+", Pilih Peranmu untuk memulai game!")
}
else if (nama.length >= 0  && peran === "Ksatria") {
	console.log("Selamat datang di Dunia Proxytia, "+nama+
"\nHalo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!")
}
else if (nama.length >= 0  && peran === "Tabib") {
	console.log("Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka.")
}
else if (nama.length >= 0  && peran === "Penyihir") {
	console.log("Selamat datang di Dunia Proxytia, "+nama+
"\nHalo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu!")
}