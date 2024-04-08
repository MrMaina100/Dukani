import { Skeleton } from './skeleton';
export default function SkeletonComponent() {
 
  return (
    <>
      
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
          <Skeleton className='w-40 md:w-48 h-60 rounded-md'>
            <div className='flex flex-col space-y-1.5 p-2'>
               <Skeleton className='w-36 h-36'/>
               <Skeleton className="w-12"/>
               <Skeleton className="w-12"/>

            </div>

          </Skeleton>
        </div>
     
    </>
  );
}
