import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }) {
  const slideRight = {
    name: 'Slide Right',
    variants: {
      initial: {
        opacity: 0,
        left: '-100%',
        scale: 0.6,
      },
      animate: {
        opacity: 1,
        left: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        left: '100%',
        scale: 0.6,
      },
    },
    transition: {
      duration: 0.5,
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <Layout>
        <AnimatePresence exitBeforeEnter={false}>
          <m.div
            key={router.route}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideRight.variants}
            transition={slideRight.transition}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </Layout>
    </LazyMotion>
  );
}

export default MyApp;
