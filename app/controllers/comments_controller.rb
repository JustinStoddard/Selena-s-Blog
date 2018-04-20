class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_comment, only: [:show, :update, :destory]

  def index
    render json: Comment.order(created_at: :desc)
  end

  def create
    comment = current_user.comments.create(comment_params)
    if comment.save
      render json: comment
    else
      render json: { errors: comment.errors.full_messages.join(',') }, status: 422
    end
  end

  def show
    render json: @comment
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: comment.errors.full_messages.join(',') }, status: 422
  end

  def destory
    @comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:name, :subject, :description, :liked)
  end

  def set_comment
    @comment = Comment.find(params[:id]) 
  end
end
