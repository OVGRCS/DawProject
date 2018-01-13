json.extract! taxi, :id, :name, :services, :status, :rate, :sumkms, :working, :created_at, :updated_at
json.url taxi_url(taxi, format: :json)
