class Game < ActiveRecord::Base
  has_and_belongs_to_many :players
  validate :unique_players

  def unique_players
  end
end
