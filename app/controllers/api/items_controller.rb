class Api::ItemsController < Api::ApiController
  before_action  :set_menu
  before_action :set_item, only: [:show, :update, :destroy]
  
  def index
    render json: @menu.items.all
  end

  def show
    render json: @item
  end

  def create
    item = @menu.item.new(item_params)

    if item.save
      render json: item
    else
      render_errors(item)
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render_errors(@item)
    end
  end

  def destroy
    @item.destroy
  end
  
  private
    def set_menu
      @menu = Menu.find(params[:menu_id])
    end
    
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :price, :menu_id)
    end
end
