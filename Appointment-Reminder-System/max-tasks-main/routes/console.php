<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->everyMinute();

Artisan::command('send-task-reminders', function () {
    $this->call('app:send-task-reminders');
})->everyMinute();
