texto = 'supermercado superação hiperMERCADO'

puts texto.scan(/(?:super)[\wÀ-ù]+/i).join(' ')

# Positive Lookbehind
puts texto.scan(/(?<=super)[\wÀ-ù]+/i).join(' ')

# Negative Lookbehind
puts texto.scan(/(?<!super)mercado/i).join(' ')