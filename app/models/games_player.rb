class GamesPlayer < ActiveRecord::Base
  belongs_to :game
  belongs_to :player

  validate :two_players

  def two_players
    if game.players.size != 2
      error.add(:number_of_players, 'must be two!')
    end
  end

end
