class NotesController < ApplicationController

  def index
    if params[:search]
      @notes = Note.search(params[:search]).order("created_at desc")
    else
      @notes = Note.all.order("created_at desc")
    end
  end

  # def show
  #   @song = Song.find(params[:id])
  #   @full_title = full_title(@song)
  #   @review = Review.new
  #   @reviews = @song.reviews
  #   @reviews = @reviews.order(created_at: :desc)
  #   @avg_rating = avg_rating(@song)
  # end
  #
  # def destroy
  #   @song = Song.find(params[:id])
  #   @artist = @song.artist
  #   @song.destroy
  #   redirect_to @artist
  # end

end
