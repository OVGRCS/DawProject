class CreateTaxis < ActiveRecord::Migration[5.1]
  def change
    create_table :taxis do |t|
      t.string :name
      t.integer :services
      t.boolean :status
      t.integer :rate
      t.integer :sumkms
      t.boolean :working

      t.timestamps
    end
  end
end
