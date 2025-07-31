export interface Municipality {
  name: string;
  type: 'City' | 'Borough' | 'Township';
  slug: string;
  url: string;
}

// New Lackawanna County municipalities for golf cart business
export const NEW_LACKAWANNA_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Major City
  { name: 'Scranton', type: 'City', slug: 'scranton', url: '/scranton-golf-carts' },

  // Boroughs
  { name: 'Archbald', type: 'Borough', slug: 'archbald', url: '/archbald-golf-carts' },
  { name: 'Carbondale', type: 'Borough', slug: 'carbondale', url: '/carbondale-golf-carts' },
  { name: 'Clarks Summit', type: 'Borough', slug: 'clarks-summit', url: '/clarks-summit-golf-carts' },
  { name: 'Dalton', type: 'Borough', slug: 'dalton', url: '/dalton-golf-carts' },
  { name: 'Jermyn', type: 'Borough', slug: 'jermyn', url: '/jermyn-golf-carts' },
  { name: 'Jessup', type: 'Borough', slug: 'jessup', url: '/jessup-golf-carts' },
  { name: 'Moosic', type: 'Borough', slug: 'moosic', url: '/moosic-golf-carts' },
  { name: 'Moscow', type: 'Borough', slug: 'moscow', url: '/moscow-golf-carts' },
  { name: 'Old Forge', type: 'Borough', slug: 'old-forge', url: '/old-forge-golf-carts' },
  { name: 'Olyphant', type: 'Borough', slug: 'olyphant', url: '/olyphant-golf-carts' },
  { name: 'Taylor', type: 'Borough', slug: 'taylor', url: '/taylor-golf-carts' },

  // Townships
  { name: 'Chinchilla', type: 'Township', slug: 'chinchilla-township', url: '/chinchilla-township-golf-carts' },
  { name: 'Elmhurst', type: 'Township', slug: 'elmhurst-township', url: '/elmhurst-township-golf-carts' },
  { name: 'Fleetville', type: 'Township', slug: 'fleetville-township', url: '/fleetville-township-golf-carts' },
  { name: 'La Plume', type: 'Township', slug: 'la-plume-township', url: '/la-plume-township-golf-carts' },
  { name: 'Peckville', type: 'Township', slug: 'peckville-township', url: '/peckville-township-golf-carts' },
  { name: 'Ransom', type: 'Township', slug: 'ransom-township', url: '/ransom-township-golf-carts' },
  { name: 'Waverly', type: 'Township', slug: 'waverly-township', url: '/waverly-township-golf-carts' },
];

// Lackawanna County coordinates (center of county near Scranton)
export const NEW_LACKAWANNA_COUNTY_COORDINATES = {
  latitude: 41.4993,
  longitude: -75.6649
};

// Lackawanna County basic information
export const NEW_LACKAWANNA_COUNTY_INFO = {
  name: 'Lackawanna County',
  state: 'Pennsylvania',
  totalMunicipalities: 19, // 1 city + 11 boroughs + 7 townships
  countySeat: 'Scranton',
  population: 215896, // 2020 census
  area: '459 square miles',
  founded: 1878,
  website: 'lackawannacounty.org'
};