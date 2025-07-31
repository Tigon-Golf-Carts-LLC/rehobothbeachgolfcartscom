#!/bin/bash

# Denago vehicles
sed -i '/Schedule Test Drive/{N; N; N; s#\(.*\)</Link>\(.*\)</div>#\1</Link>\
                  <a href="https://tigongolfcarts.com/denago-ev/nomad/" target="_blank" rel="noopener noreferrer">\
                    <Button size="lg" className="w-full sm:w-auto bg-theme-orange hover:bg-orange-600 text-white">\
                      View More Details\
                    </Button>\
                  </a>\2</div>#}' DenagoEvNomad.tsx

sed -i '/Schedule Test Drive/{N; N; N; s#\(.*\)</Link>\(.*\)</div>#\1</Link>\
                  <a href="https://tigongolfcarts.com/denago-ev/nomad-xl/" target="_blank" rel="noopener noreferrer">\
                    <Button size="lg" className="w-full sm:w-auto bg-theme-orange hover:bg-orange-600 text-white">\
                      View More Details\
                    </Button>\
                  </a>\2</div>#}' DenagoEvNomadXL.tsx

# Evolution vehicles  
sed -i '/Finance Options/{N; N; N; s#\(.*\)</Link>\(.*\)</div>#\1</Link>\
                  <a href="https://tigongolfcarts.com/evolution/carrier/6-plus/" target="_blank" rel="noopener noreferrer">\
                    <Button size="lg" className="w-full sm:w-auto bg-theme-orange hover:bg-orange-600 text-white">\
                      View More Details\
                    </Button>\
                  </a>\2</div>#}' EvolutionCarrier6Plus.tsx

