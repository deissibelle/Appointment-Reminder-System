<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Task;
use Illuminate\Support\Facades\Notification;
use App\Notifications\TaskReminderNotification;

class SendTaskReminders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-task-reminders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send task reminders';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $tasks = Task::where('reminder_time', '<=', now())->get();

    foreach ($tasks as $task) {
            Notification::route('mail', $task->email)
                ->notify(new TaskReminderNotification($task));
        }
    }
}
