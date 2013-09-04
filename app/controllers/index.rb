get '/' do
  # Look in app/views/index.erb
  redirect '/players/new'
end

get '/games/new' do
  erb :new_players
end

post '/games' do
  #create new players
  #create new game
  #sessions[:game_id] = game.id
  redirect "/games"
end

get '/games' do
  #show players
  erb :start
end

post '/games' do
  #sessions[:game_id]
  #log game start time
  redirect "/games/play"
end

get '/games/play' do

  erb :racer
end

post '/games/end' do
  #log game end time
  #create custom url
  #ajax request

  #return total time data
end

get '/games/:url/' do
  #find stats
  erb :stats
end
