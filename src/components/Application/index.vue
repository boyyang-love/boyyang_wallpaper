<script lang="ts" setup>
import {
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
  NLoadingBarProvider,
  darkTheme,
} from 'naive-ui'
import {MessageContent} from '@/components/MessageContent'
import {DialogContent} from '@/components/DialogContent'
import {NotificationContent} from '@/components/Notification'
import {Loading} from '@/components/Loading'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <DialogContent/>
        <n-notification-provider placement="bottom-right">
          <NotificationContent/>
          <n-message-provider>
            <MessageContent/>
            <Loading>
              <slot slot="default"></slot>
            </Loading>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
