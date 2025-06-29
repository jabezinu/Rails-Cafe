class MenusController < ApplicationController
  def index
    menus = Menu.all
    render json: menus
  end

  def show
    menu = Menu.find(params[:id])
    render json: menu
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu, status: :created
    else
      render json: { errors: menu.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    menu = Menu.find(params[:id])
    if menu.update(menu_params)
      render json: menu
    else
      render json: { errors: menu.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    menu = Menu.find(params[:id])
    menu.destroy
    head :no_content
  end

  private

  def menu_params
    params.require(:menu).permit(:name, :image, :price, :ingredient, :tag, :category_id)
  end
end