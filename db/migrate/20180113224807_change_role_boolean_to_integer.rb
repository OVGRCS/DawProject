class ChangeRoleBooleanToInteger < ActiveRecord::Migration[5.1]
  def change
  	change_column :users, :role, :integer
  	add_column	  :users, :type, :integer
  end
end
