get '/' do
  erb :index
end

get '/skills/:skill' do
  erb :skills
end

get '/meals' do
  @meals = ["Oatmeal"]

  erb :meals
end


