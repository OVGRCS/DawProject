class RemTypeAddOurRole < ActiveRecord::Migration[5.1]
  def change
  	remove_column :users, :type
  	add_column	  :users, :ourRole, :string
  end
end
