if (window.location.href == 'https://acorn.utoronto.ca/sws/#/history/academic') {
    v = document.getElementsByClassName('hidden-print');
    if (v.length > 0) {
        n = document.getElementById('acorn-nav-top');
        m = document.getElementById('acorn-nav-side-parent');
        d = document.getElementsByClassName('academic-history'); 
        f = document.getElementsByClassName('academic-history-report');
        bt = document.getElementById('acorn-footer'); 
        h = document.getElementsByClassName('history-academic-complete')[0];
        h.style.borderRadius = '10px';
        n.remove(); m.remove(); bt.remove();
        t = document.getElementsByTagName('h1');
        name = v[1].innerHTML.match(/<strong[^>]*>([\s\S]*?)<\/strong>/)[1];
        t[0].innerHTML = name;
        d[0].innerHTML = f[0].innerHTML;
        document.getElementById('main-content').style.maxWidth = '850px';
        document.getElementById('main-content').style.padding = '40px';
        x = document.getElementById('body-container');
        x.style.paddingTop = '0px';
        x.style.display = 'flex';
        x.style.justifyContent = 'center';
        k = document.getElementsByClassName('credit-earned-section');
        for (i = 0; i < k.length; i++) {
            k[i].style.marginBottom = '15px';
            k[i].style.marginTop = '0';
        }
        hdr = document.getElementsByClassName('skipprint')[0];
        hdr.style.display='flex';
        hdr.style.justifyContent='space-between';
        hdr.style.placeItems='center';
        hdr.innerHTML = '<div id=&#39;frst&#39;><h1 class=&#39;page-title academics&#39;>Nikhil Bhambra</h1><h4>Victoria College, University of Toronto</h4></div><div id=&#39;scnd&#39;><h3>Accurate as of: December 29th, 2020</h3><h4>This is not an official transcript.</h4></div>';
        scnd = document.getElementById('scnd');
        scnd.style.textAlign = "right";
        scnd.style.marginTop = "1rem";       
        regh = document.getElementsByClassName('regHistoryHeader blok pre-elem')[0];
        regh.style.margin = '6px 0 13px';
        regh.style.paddingLeft = '1rem';
        ps = document.getElementsByTagName('p');
        ps[0].style.paddingLeft = '1rem';
        ps[1].style.paddingLeft = '1rem';
        hh = document.getElementsByTagName('h1')[0];
        hh.style.marginBottom = "0";
    } else {
        alert('See where it says Complete Academic History next to your name? Click that and try again.');
    }
} else {
    alert('This bookmarklet only works on Acorn! Please log into Acorn, navigate to Academic History, and try again.');
}

        // bd = document.body;
        // html2pdf(bd);
        // alert('Go check your downloads! :)');

javascript:(function(){if(window.location.href=='https://acorn.utoronto.ca/sws/#/history/academic'){v=document.getElementsByClassName('hidden-print');if(v.length>0){n=document.getElementById('acorn-nav-top');m=document.getElementById('acorn-nav-side-parent');d=document.getElementsByClassName('academic-history');f=document.getElementsByClassName('academic-history-report');bt=document.getElementById('acorn-footer');h=document.getElementsByClassName('history-academic-complete')[0];h.style.borderRadius='10px';n.remove();m.remove();bt.remove();t=document.getElementsByTagName('h1');name=v[1].innerHTML.match(/<strong[^>]*>([\s\S]*?)<\/strong>/)[1];t[0].innerHTML=name;d[0].innerHTML=f[0].innerHTML;document.getElementById('main-content').style.maxWidth='850px';document.getElementById('main-content').style.padding='40px';x=document.getElementById('body-container');x.style.paddingTop='0px';x.style.display='flex';x.style.justifyContent='center';k=document.getElementsByClassName('credit-earned-section');for(i=0;i<k.length;i++){k[i].style.marginBottom='15px';k[i].style.marginTop='0'}
hdr=document.getElementsByClassName('skipprint')[0];hdr.style.display='flex';hdr.style.justifyContent='space-between';hdr.style.placeItems='center';hdr.innerHTML='<div><h1 class=&#39;page-title academics&#39;>Nikhil Bhambra</h1><h4>Victoria College, University of Toronto</h4></div><div><h3>Accurate as of: December 29th, 2020</h3><h4>This is not an official transcript.</h4></div>'}else{alert('See where it says Complete Academic History next to your name? Click that and try again.')}}else{alert('This bookmarklet only works on Acorn! Please log into Acorn, navigate to Academic History, and try again.')}})()

javascript:(function(){if(window.location.href=='https://acorn.utoronto.ca/sws/#/history/academic'){v=document.getElementsByClassName('hidden-print');if(v.length>0){n=document.getElementById('acorn-nav-top');m=document.getElementById('acorn-nav-side-parent');d=document.getElementsByClassName('academic-history');f=document.getElementsByClassName('academic-history-report');bt=document.getElementById('acorn-footer');h=document.getElementsByClassName('history-academic-complete')[0];h.style.borderRadius='10px';n.remove();m.remove();bt.remove();t=document.getElementsByTagName('h1');name=v[1].innerHTML.match(/<strong[^>]*>([\s\S]*?)<\/strong>/)[1];t[0].innerHTML=name;d[0].innerHTML=f[0].innerHTML;document.getElementById('main-content').style.maxWidth='850px';document.getElementById('main-content').style.padding='40px';x=document.getElementById('body-container');x.style.paddingTop='0px';x.style.display='flex';x.style.justifyContent='center';k=document.getElementsByClassName('credit-earned-section');for(i=0;i<k.length;i++){k[i].style.marginBottom='15px';k[i].style.marginTop='0'}
hdr=document.getElementsByClassName('skipprint')[0];hdr.style.display='flex';hdr.style.justifyContent='space-between';hdr.style.placeItems='center';hdr.innerHTML='<div><h1 class=&#39;page-title academics&#39;>Nikhil Bhambra</h1><h4>Victoria College, University of Toronto</h4></div><div><h3>Accurate as of: December 29th, 2020</h3><h4>This is not an official transcript.</h4></div>';regh=document.getElementsByClassName('regHistoryHeader blok pre-elem');regh.style.margin='6px 0 13px';ps=document.getElementsByTagName('p');ps[0].style.paddingLeft='1rem';ps[1].style.paddingLeft='1rem';hh=document.getElementsByTagName('h1')[0];hh.style.marginBottom="0"}else{alert('See where it says Complete Academic History next to your name? Click that and try again.')}}else{alert('This bookmarklet only works on Acorn! Please log into Acorn, navigate to Academic History, and try again.')}})()