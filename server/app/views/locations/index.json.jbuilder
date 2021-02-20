json.array! @locations do |location|
  json.id location.id
  json.code location.code
  json.name location.prefecture
  json.name_ja location.region
end
