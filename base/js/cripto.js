
const secret = "suggestum_test_bona_fortuna_hoc_stercore_uti_conatur_et_si_opera_phimosis_habes_antequam_problema_in_homo_vado_ut_impleat_modicum_farciminis_nunc_autem_eamus_hodie_obstante_anxietatem_discriminis_suus_been_a_die_enim_bona";
function Criptografar(dd){
	var res="";
	var l;
	var i;
	var j=0;

	for (i=0;i<dd.length; i++){
		j++;

		l=(Asc(dd.substr(i,1))+(Asc(secret.substr(j,1))));
		/*console.log('esq('+dd.substr(i,1)+'): '+Asc(dd.substr(i,1)));
		console.log('dir('+secret.substr(j,1)+'): '+(Asc(secret.substr(j,1))));
		console.log("l: "+l);*/
		if (j==secret.length){
			j=1;
		}
		if (l>255){
			l-=256;
		}
		res+=(Chr(l));
	}
	return res;
}
function Descriptografar(dd){
	var res="";
	var l;
	var i;
	var j=0;
	
	for (i=0; i<dd.length;i++){
		j++;
		l=( Asc(dd.substr(i,1)) -(Asc(secret.substr(j,1))) );
		/*console.log('esq('+dd.substr(i,1)+'): '+Asc(dd.substr(i,1)));
		console.log('dir('+secret.substr(j,1)+'): '+(Asc(secret.substr(j,1))));
		console.log("l: "+l);*/
		if (j==secret.length){
			j=1;
		}
		if (l<0){
			l+=256;
		}
		res+=(Chr(l));
	}
	return res;
}
function Asc(String){
	return String.charCodeAt(0);
}

function Chr(AsciiNum){
	return String.fromCharCode(AsciiNum)
}