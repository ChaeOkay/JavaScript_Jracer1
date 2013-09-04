class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner
      t.time :time_start
      t.time :time_end
    end
  end
end
