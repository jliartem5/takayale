class PagesController < ApplicationController
  def index
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def yakitori
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def sushi
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def sashimi
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def maki
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def menu
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def menu_midi
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def platschaud
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def boissons
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def alacarte
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def contact
    if request.headers['X-PJAX']
      render :layout => false
    end
  end
end
