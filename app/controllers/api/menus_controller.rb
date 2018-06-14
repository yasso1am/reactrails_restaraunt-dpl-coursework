class Api::MenusController < Api::ApiController
  before_action :set_menu, only: [:show]
  
  def index
    render json: Menu.all
  end

  def show
    render json: @menu
  end

  def destroy
    @menu.destroy
  end

  private
    def set_menu
      @menu = Menu.find(params[:id])
    end
end
