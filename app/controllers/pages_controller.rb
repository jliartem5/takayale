class PagesController < ApplicationController
  def index
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def page1
    render :layout => false
  end

  def page2
    render :layout => false
  end
end
