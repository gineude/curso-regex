texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

# this one
regexNove = Regexp::new('9')
puts regexNove.match(texto)

# another one
regexNove = %r{9}
puts regexNove.match(texto)

puts regexNove =~ '894' # true or false

regexLetras = /[a-f]/
puts texto.scan(regexLetras).join(' ')

puts texto.split(/,/).join

print texto.split(/[aeiou]/)