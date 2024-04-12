document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const age = parseInt(document.getElementById('ageInput').value);
    if (!isNaN(age) && age > 0) {
      if (age < 13) {
        siteyiKapat();
      } else {
        yasKaydet(age);
        yeniSiteAc("https://discord.gg/wmAss2nnsu");
      }
    } else {
      document.getElementById('message').textContent = 'Lütfen geçerli bir yaş girin.';
    }
  });
  
  function yasKaydet(age) {
    // Burada genellikle yaş bilgisini bir sunucuya kaydetmek için bir işlem yapılır.
    // Bu örnekte sadece bir mesaj gösteriyoruz.
    document.getElementById('message').textContent = `Yaşınızı ${age} olarak kaydettiniz. Teşekkür ederiz.`;
  }
  
  function siteyiKapat() {
    window.location.replace('https://www.youtube.com/watch?v=o_Xq4bVEDx0');
  }
  
  function yeniSiteAc(link)
  {
    window.location.replace(link);
  }
