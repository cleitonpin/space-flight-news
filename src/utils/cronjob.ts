import { CronJob } from 'cron'
import { exec } from 'child_process'

class CronJobTask {
  cronJob: CronJob

  constructor() {
    this.cronJob = new CronJob('0 9 * * *', () => {
      try {
        this.runTask()
      } catch (error) {
        console.log(error)
      }
    })

    if (!this.cronJob.running) {
      this.cronJob.start()
    }
  }

  public async runTask() {
    exec('npm run seed:run', (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }

      if (stderr) {
        return
      }
    })
  }
}

const cronjob = new CronJobTask()

