class PagesController < ApplicationController
  def index
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def page1
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def page2
    if request.headers['X-PJAX']
      render :layout => false
    end
  end
end
