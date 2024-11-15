<?php

namespace App\Notifications;

use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Carbon\Carbon;
class TaskReminderNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('MaxTask Reminder')
            ->line('Vous avez une tâche à faire.')
            ->line('Tâche: ' . $this->task->title)
            ->line('Description: ' . $this->task->description)
            ->line('Programmée à: ' . Carbon::parse($this->task->reminder_time)->format('d/m/Y H:i'))
            ->action('Voir la tâche', url('/tasks/' . $this->task->id))
            ->line('Merci pour l\'utilisation de MaxTask!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
