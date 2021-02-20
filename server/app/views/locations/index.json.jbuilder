json.array! @locations do |location|
  json.id location.id
  json.code location.code
  json.prefecture location.prefecture
  json.region location.region
end
