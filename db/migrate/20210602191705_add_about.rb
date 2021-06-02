class AddAbout < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :about, :string
  end
end
