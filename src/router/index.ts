import { Router } from 'typecompose'
import { BorderPaneDescription } from '../components/borderPane/BorderPaneDescription'
import { ButtonDescription } from '../components/button/ButtonDescription'
import { CardDescription } from '../components/card/CardDescription'
import { StackPaneDescription } from '../components/stackPane/StackPaneDescription'
import { AppPage } from '../main'
import { TextFieldDescription } from '../components/textField/TextFieldDescription'
import { TabPaneDescription } from '../components/tabPane/TabPaneDescription'

const router = Router.create({
  history: 'history',
  routes: [
    {
      path: '/',
      component: AppPage,
      children: [
        {
          path: 'card',
          component: CardDescription,
        },
        {
          path: 'button',
          component: ButtonDescription,
        },
        {
          path: 'textfield',
          component: TextFieldDescription,
        },
        {
          path: 'borderpane',
          component: BorderPaneDescription,
          children: [
            {
              path: '*',
              component: CardDescription,
            }
          ]
        },
        {
          path: 'stackpane',
          component: StackPaneDescription,
        },
        {
          path: 'tabpane',
          component: TabPaneDescription,
        }
      ],
    }

    // {
    //   path: '/',
    //   component: () => import('../layouts/blank.vue'),
    //   children: [
    //     {
    //       path: 'login',
    //       component: () => import('../pages/login.vue'),
    //     },
    //     {
    //       path: 'register/:token',
    //       component: () => import('../pages/register.vue'),
    //     },
    //     {
    //       path: '/:pathMatch(.*)*',
    //       component: () => import('../pages/[...all].vue'),
    //     },
    //   ],
    // },
  ],
})

router.beforeEach(async to => {
  console.log('beforeEach test: ', to)
})

export default router
