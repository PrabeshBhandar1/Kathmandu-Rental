function filterListings() {
    const location = document.getElementById('location').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
  
    const listings = document.querySelectorAll('.listing');
  
    listings.forEach(listing => {
      const listingLocation = listing.getAttribute('data-location').toLowerCase();
      const listingPrice = parseFloat(listing.getAttribute('data-price'));
  
      const matchesLocation = location === '' || listingLocation.includes(location);
      const matchesPrice = listingPrice >= minPrice && listingPrice <= maxPrice;
  
      if (matchesLocation && matchesPrice) {
        listing.style.display = 'block';
      } else {
        listing.style.display = 'none';
      }
    });
  }